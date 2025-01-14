import { Linkedin, Github, Mail, FileText } from 'lucide-react';
import Terminal from './Terminal';

function Contact() {
  return (
    <section id="contact" className="pt-16 pb-24">
      <h2 className="text-4xl font-bold mb-12 gradient-text">Contact Me</h2>
      <div className="flex gap-6">
        <a
          href="https://www.linkedin.com/in/freddysong/"
          className="p-3 project-card rounded-lg hover:opacity-80 transition-opacity"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://github.com/freddysongg"
          className="p-3 project-card rounded-lg hover:opacity-80 transition-opacity"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={24} />
        </a>
        <a
          href="mailto:fredsong99@gmail.com"
          className="p-3 project-card rounded-lg hover:opacity-80 transition-opacity"
        >
          <Mail size={24} />
        </a>
        <a
          href="https://drive.google.com/file/d/161cy7rTuokT6VPH4pt7p9lHJlQdJEBMc/view?usp=sharing"
          className="p-3 project-card rounded-lg hover:opacity-80 transition-opacity"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FileText size={24} />
        </a>
      </div>
      <Terminal />
    </section>
  );
}

export default Contact;