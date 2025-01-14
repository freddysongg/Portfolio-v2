import React from 'react';
import Typewriter from 'typewriter-effect';
import { ExternalLink } from 'lucide-react';

function Hero() {
  return (
    <section id="about" className="pt-16">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
        Freddy Song
      </h1>
      <div className="text-lg mb-8">
      <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                'Hey there! I’m Freddy Song, a full-stack dev and Machine Learning engineer who loves uncovering the mysteries of machine learning 🤖. When I’m not coding, you’ll catch me DJing 🔊, café hopping ☕︎, or geeking out over random tech 🖥️'
              )
              .callFunction(() => {
                const cursorElement = document.querySelector('.Typewriter__cursor') as HTMLElement;
                if (cursorElement) {
                  cursorElement.style.display = '|';
                }
              })
              .start();
          }}
          options={{
            delay: 20, 
            cursor: '|', 
          }}
        />
      </div>
      <div className="flex gap-6">
        <a
          href="https://www.linkedin.com/in/freddysong/"
          className="flex items-center gap-2 text-accent hover:opacity-80 transition-opacity"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn <ExternalLink size={16} />
        </a>
        <a
          href="https://github.com/freddysongg"
          className="flex items-center gap-2 text-accent hover:opacity-80 transition-opacity"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub <ExternalLink size={16} />
        </a>
        <a
          href="https://drive.google.com/file/d/161cy7rTuokT6VPH4pt7p9lHJlQdJEBMc/view?usp=sharing"
          className="flex items-center gap-2 text-accent hover:opacity-80 transition-opacity"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume <ExternalLink size={16} />
        </a>
      </div>
    </section>
  );
}

export default Hero;