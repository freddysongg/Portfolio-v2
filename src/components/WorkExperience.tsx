const experiences = [
  {
    title: 'Software Engineer, Wahid Studio',
    period: 'April 2024 – Present',
    description: (
      'Currently building the next and upcoming e-commerce application for clothing designers.'
    ),
    skills: [
      'TypeScript',
      'PostgreSQL',
      'Drizzle ORM',
      'Python',
      'DataGrip',
      'Postman',
    ],
  },
  {
    title: 'Lead Software Engineer, TablePal (prev. SeekEats)',
    period: 'March 2024 – Present',
    description: (
      'Led Backend and Machine Learning Operations.'
    ),
    skills: ['Python', 'MongoDB', 'Next.js', 'AWS ECS', 'Docker'],
  },
  {
    title: 'Co-Founder, AI @ UCR',
    period: 'October 2023 – Present',
    description: (
      'Lead Project Development and Exploration.'
    ),
    skills: ['Leadership', 'Machine Learning', 'Networking'],
  },
  {
    title: 'Software Developer Intern, SeekEats',
    period: 'July 2023 – March 2024',
    description: (
      'Full-Stack Developer for SeekEats mobile application.'
    ),
    skills: ['Node.js', 'React Native', 'MongoDB'],
  },
  {
    title: 'Software Engineer Intern, HomesUnlimited',
    period: 'June 2023 – September 2023',
    description: (
      'Full-Stack Developer focusing on AI Chatbot creation.'
    ),
    skills: ['Vue.js', 'GPT-4 API', 'Firebase', 'Data Migration'],
  },
  {
    title: 'Sponsorship Lead, Citrus Hack @ UCR',
    period: 'July 2023 – June 2024',
    description: (
      'Led the Sponsorship Committee.'
    ),
    skills: ['Communication', 'Leadership'],
  },
  {
    title: 'Sponsorship Committee, Citrus Hack @ UCR',
    period: 'September 2022 – July 2023',
    description: (
      'Liaison between Citrus Hack and corporate sponsors.'
    ),
    skills: ['Communication', 'Networking'],
  },
];

function WorkExperience() {
  return (
    <section id="work" className="pt-16">
      <h2 className="text-4xl font-bold mb-12 gradient-text">Work Experience</h2>
      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-xl font-bold">{experience.title}</h3>
            <p className="text-gray-400">{experience.period}</p>
            <div className="text-gray-300">{experience.description}</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {experience.skills.map((skill, skillIndex) => (
                <span
                  key={`skill-${index}-${skillIndex}`}
                  className="inline-flex rounded-full bg-neutral-700 px-3 py-1 text-xs font-medium text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
