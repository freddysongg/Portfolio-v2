const experiences = [
  {
    title: 'Software Engineer, Wahid Studio',
    period: 'April 2024 – Present',
    description: (
      <ul className="list-disc">
        <li>
          Utilized DataGrip and Python scripts to automate refining of over 100k lines of data imported from Shopify’s product taxonomy.
        </li>
        <li>
          Created over 90+ CRUD and RESTful endpoints while implementing schema validation checks in Drizzle ORM, ensuring data security, consistency, and compliance for PostgreSQL interactions in DataGrip.
        </li>
        <li>
          Developed an OOP hierarchy for clothing categories and attributes, using a balanced AVL tree to enforce hierarchical integrity.
        </li>
        <li>
          Led the integration of Stripe, Shopify, and Shippo, adhering to documentation to enable users to seamlessly connect their Shopify stores with up to 10,000 products, supporting high-volume transaction processing and custom shipping workflows.
        </li>
      </ul>
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
      <ul className="list-disc">
        <li>
          Researched and implemented user behavior optimization strategies by combining Bayesian optimization and time series transformers to analyze interaction patterns and refine chatbot responses.
        </li>
        <li>
          Improved chatbot accuracy by 50% and reduced response time by 20% through a 5-stage bucket filtering ML pipeline.
        </li>
        <li>
          Spearheaded the deployment of a robust DevOps pipeline through AWS ECS using Docker, enabling a 40% reduction in task completion time and enhancing system scalability.
        </li>
      </ul>
    ),
    skills: ['Python', 'MongoDB', 'Next.js', 'AWS ECS', 'Docker'],
  },
  {
    title: 'Co-Founder, AI@UCR',
    period: 'October 2023 – Present',
    description: (
      <ul className="list-disc">
        <li>
          Led technical workshops on machine learning and neural networks, engaging over 50 participants.
        </li>
        <li>
          Coordinated with UCR faculty and industry experts to host guest lectures, expanding access to advanced AI insights and career development.
        </li>
      </ul>
    ),
    skills: ['Leadership', 'Machine Learning', 'Networking'],
  },
  {
    title: 'Software Developer Intern, SeekEats',
    period: 'July 2023 – March 2024',
    description: (
      <ul className="list-disc">
        <li>
          Implemented a secure RBAC system with two-step verification, reducing unauthorized access by 40%.
        </li>
        <li>
          Enhanced user experience through an interactive iOS/Android store-front with over 60+ components.
        </li>
      </ul>
    ),
    skills: ['Node.js', 'React Native', 'MongoDB'],
  },
  {
    title: 'Software Engineer Intern, HomesUnlimited',
    period: 'June 2023 – September 2023',
    description: (
      <ul className="list-disc">
        <li>
          Engineered an AI-powered chatbot leveraging GPT-4 API for context-aware data retrieval, boosting user engagement and response relevance.
        </li>
        <li>
          Migrated over 100GB of data to Firebase, optimizing retrieval by 20% and supporting 1 million monthly queries.
        </li>
      </ul>
    ),
    skills: ['Vue.js', 'GPT-4 API', 'Firebase', 'Data Migration'],
  }
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
