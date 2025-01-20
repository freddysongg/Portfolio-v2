"use client";

import * as React from "react";
import gsap from "gsap";

type CursorState = {
  stickElement: HTMLElement | null;
  skewing: number;
  states: Set<string>;
};

export class Cursor {
  private cursorRef: React.RefObject<HTMLDivElement>;
  private state: CursorState;
  
  constructor(cursorRef: React.RefObject<HTMLDivElement>) {
    this.cursorRef = cursorRef;
    this.state = {
      stickElement: null,
      skewing: 0,
      states: new Set()
    };
  }

  setStick(element: HTMLElement | null) {
    this.state.stickElement = element;
    this.update();
  }

  setSkewing(amount: number) {
    this.state.skewing = amount;
    this.update();
  }

  addState(state: string) {
    this.state.states.add(state);
    this.update();
  }

  removeState(state: string) {
    this.state.states.delete(state);
    this.update();
  }

  removeStick() {
    this.state.stickElement = null;
    this.update();
  }

  removeSkewing() {
    this.state.skewing = 0;
    this.update();
  }

  private update() {
    if (!this.cursorRef.current) return;

    // Apply states
    this.cursorRef.current.className = Array.from(this.state.states).join(" ");

    // Apply stick effect
    if (this.state.stickElement) {
      const rect = this.state.stickElement.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      
      gsap.to(this.cursorRef.current, {
        x: x,
        y: y,
        duration: 0.3,
        ease: "power2.out"
      });
    }

    // Apply skewing
    gsap.to(this.cursorRef.current, {
      skewX: this.state.skewing,
      skewY: this.state.skewing,
      duration: 0.3
    });
  }
}

export default function CursorComponent() {
  const cursorRef = React.useRef<HTMLDivElement>(null);
  const [_cursor] = React.useState(() => new Cursor(cursorRef));

  React.useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-3 h-3 bg-white rounded-full pointer-events-none mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 z-50"
    />
  );
}
