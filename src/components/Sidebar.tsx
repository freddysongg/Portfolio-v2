import { User, FolderGit2, Briefcase, Mail, Linkedin, Github, FileText } from 'lucide-react';
import { useEffect } from 'react';

function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

function Sidebar() {
  useEffect(() => {
    const links = document.querySelectorAll('.sidebar-nav a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href')?.replace('#', '');
        if (target) {
          scrollToSection(target);
        }
      });
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);
  return (
    <aside className="sidebar fixed w-full md:w-64 md:h-screen p-6 flex md:flex-col justify-between z-50">
      <nav className="hidden md:block">
        <a href="#" className="text-xl font-bold mb-8 block">Home</a>
        <ul className="space-y-4">
          <li>
            <a href="#about" className="sidebar-nav text-accent hover:opacity-80 transition-opacity flex items-center gap-2">
              <User size={16} /> About
            </a>
          </li>
          <li>
            <a href="#projects" className="sidebar-nav text-accent hover:opacity-80 transition-opacity flex items-center gap-2">
              <FolderGit2 size={16} /> Projects
            </a>
          </li>
          <li>
            <a href="#work" className="sidebar-nav text-accent hover:opacity-80 transition-opacity flex items-center gap-2">
              <Briefcase size={16} /> Work
            </a>
          </li>
          <li>
            <a href="#contact" className="sidebar-nav text-accent hover:opacity-80 transition-opacity flex items-center gap-2">
              <Mail size={16} /> Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex md:flex-col gap-6 justify-center md:justify-start">
        <h2 className="hidden md:block text-xl font-bold mb-4">Find Me</h2>
        <div className="flex gap-6 md:flex-col">
          <a
            href="https://www.linkedin.com/in/freddysong/"
            className="text-accent hover:opacity-80 transition-opacity flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={16} /> <span className="hidden md:inline">LinkedIn</span>
          </a>
          <a
            href="https://github.com/freddysongg"
            className="text-accent hover:opacity-80 transition-opacity flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} /> <span className="hidden md:inline">GitHub</span>
          </a>
          <a
            href="mailto:fredsong99@gmail.com"
            className="text-accent hover:opacity-80 transition-opacity flex items-center gap-2"
          >
            <Mail size={16} /> <span className="hidden md:inline">Email</span>
          </a>
          <a
            href="https://drive.google.com/file/d/161cy7rTuokT6VPH4pt7p9lHJlQdJEBMc/view?usp=sharing"
            className="text-accent hover:opacity-80 transition-opacity flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText size={16} /> <span className="hidden md:inline">Resume</span>
          </a>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
