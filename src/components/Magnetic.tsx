"use client";

import * as React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import type { Cursor } from "./Cursor";
import styles from "../Magnetic.module.scss";

export interface MagneticProps {
  speed?: number;
  offset?: number;
  spring?: number;
  gravity?: number;
  className?: string;
  cursor?: Cursor | null;
  children: React.ReactNode;
  scrollRef: React.RefObject<HTMLElement>;
}

export const Magnetic: React.FC<MagneticProps> = ({
  speed = 1,
  offset = 1,
  spring = 0.3,
  gravity = 0,
  className,
  cursor,
  children,
  scrollRef
}) => {
  const childrenRef = React.useRef<HTMLElement>(null);

  // Handle the sticking cursor effect
  React.useEffect(() => {
    if (!cursor || !childrenRef.current) return;
    
    const element = childrenRef.current;
    
    const onMouseEnter = () => {
      cursor.setStick(element);
      cursor.setSkewing(2);
      cursor.addState("-expand");
    };
    
    const onMouseLeave = () => {
      cursor.removeStick();
      cursor.removeSkewing();
      cursor.removeState("-expand");
    };

    element.addEventListener("mouseenter", onMouseEnter);
    element.addEventListener("mouseleave", onMouseLeave);

    return () => {
      element.removeEventListener("mouseenter", onMouseEnter);
      element.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [cursor]);

  // Handle scrolling (since the div is fixed in CSS)
  React.useEffect(() => {
    if (!scrollRef.current) return;
    
    gsap.registerPlugin(ScrollTrigger);
    const show = gsap.fromTo(scrollRef.current, {
      y: 10
    }, {
      y: 0
    }).progress(1);
    
    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: self => {
        if (self.progress === 1) {
          show.play();
        } else {
          show.reverse();
        }
      }
    });
  }, [scrollRef]);

  // Handle the magnetic effect
  React.useEffect(() => {
    if (!childrenRef.current) return;
    
    const element = childrenRef.current;
    
    const xTo = gsap.quickTo(element, "x", {
      duration: speed,
      ease: `elastic.out(${offset}, ${spring})`
    });
    
    const yTo = gsap.quickTo(element, "y", {
      duration: speed,
      ease: `elastic.out(${offset}, ${spring})`
    });
    
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = element.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      const gravityX = x * (gravity - 1);
      const gravityY = y * (gravity - 1);
      xTo(x + gravityX);
      yTo(y + gravityY);
    };
    
    const onMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    element.addEventListener("mousemove", onMouseMove);
    element.addEventListener("mouseleave", onMouseLeave);

    return () => {
      element.removeEventListener("mousemove", onMouseMove);
      element.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [speed, offset, spring, gravity]);

  return (
    <div 
      className={`${styles.magnetic} ${className || ''}`} 
      ref={childrenRef as React.RefObject<HTMLDivElement>}
    >
      {children}
    </div>
  );
};
