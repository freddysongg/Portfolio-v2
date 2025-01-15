import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Contact from './components/Contact';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Analytics/>
      <Sidebar />
      <main className="flex-1 p-8 md:ml-64">
        <div className="max-w-4xl mx-auto space-y-24">
          <Hero />
          <Projects />
          <WorkExperience />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;