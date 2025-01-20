import { useRef } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Contact from './components/Contact';
import { Analytics } from "@vercel/analytics/react"
import CursorComponent from './components/Cursor';
import { Magnetic } from './components/Magnetic';

function App() {
  const mainRef = useRef<HTMLElement>(null);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Analytics/>
      <CursorComponent />
      <Sidebar />
      <main ref={mainRef} className="flex-1 p-8 md:ml-64">
        <div className="max-w-4xl mx-auto space-y-24">
          <Magnetic cursor={null} scrollRef={mainRef}>
            <Hero />
          </Magnetic>
          <Projects />
          <WorkExperience />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
