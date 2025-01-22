import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'PHiLIP - Image Generation Suite',
    description:
      'Created an advanced generative AI model using AMD\'s cloud platform and MI210 GPUs to showcase AI\'s potential in automated image generation. It combines cutting-edge machine learning models with a user-friendly interface to democratize access to high-quality AI-generated imagery, winning the University category at AMD\'s Pervasive AI Developer Contest amongst 8,000 participants.',
    links: {
      github: 'https://github.com/freddysongg/PHiLIP-Frontend',
      demo: 'https://www.hackster.io/contests/amd2023#category-1092',
    },
    skills: [
      'Python',
      'Generative AI',
      'ROCm',
      'Flask',
      'PixArt',
      'Freestyle',
      'Stable Diffusion',
      'Control Net',
    ],
  },
  {
    title: 'CafeCast - Cafe Forecasting Platform',
    description:
      'CafeCast is an AI-driven time-series forecasting platform for café data analytics, leveraging ARIMA, LSTM, and transformer-based models for accurate sales and inventory predictions.',
    links: {
      github: 'https://github.com/freddysongg/CafeCast',
    },
    skills: [
      'Python',
      'ARIMA',
      'LSTM',
      'Time-Series Transformers',
      'Bayesian Optimization',
    ],
  },
  {
    title: 'LeftRight - Political Trivia Game',
    description:
      'A fun and interactive trivia game that matches your vibes with political sides! Swipe left or right on hilarious, trivial, or downright outrageous questions to discover if you\'re more Democrat or Republican. Minimalist Tinder-style UI, smooth animations, and shareable results make this the perfect game for Gen Z to swipe, laugh, and share!',
    links: {
      github: 'https://github.com/freddysongg/LeftRight',
      demo: 'https://leftright-trivia.vercel.app/',
    },
    skills: ['React', 'TypeScript', 'TailwindCSS', 'Vite', 'Vercel'],
  },
  {
    title: 'Climate Changer - Weather Analyzing Platform',
    description:
      'This project analyzes and visualizes climate data to uncover relationships between key environmental factors such as CO₂ emissions, energy efficiency, and urban population trends. It leverages R for data processing, Docker for containerization, and Kubernetes for scalable deployment.',
    links: {
      github: 'https://github.com/freddysongg/Climate-Changer',
    },
    skills: ['R', 'Docker', 'Kubernetes', 'Python', 'ggplot2', 'Tidyverse'],
  },
  {
    title: 'News Genie - News Archive Platform',
    description:
      'News Genie is an advanced web application designed to serve as a comprehensive article source archive. It allows users to search, find, and retrieve news articles related to specific topics, making it a valuable tool for researchers, journalists, and anyone interested in keeping track of news trends.',
    links: {
      github: 'https://github.com/freddysongg/News-Genie',
      demo: 'https://www.youtube.com/watch?v=V9jR_agnCzI&ab_channel=FreddySong'
    },
    skills: ['Python', 'Firebase', 'Google Gemini', 'React', 'Render'],
  },
  {
    title: 'CourseQuest - Educational NLP Tool',
    description:
      'Developed an NLP-based tool with XLM-RoBERTa for querying and mapping user input to relevant course content. Enhanced student learning through AI-driven insights.',
    links: {
      github: 'https://github.com/freddysongg/CourseQuest',
    },
    skills: ['Python', 'NLP', 'XLM-RoBERTa', 'Streamlit'],
  },
  {
    title: 'MafWays - Image Recognition Model',
    description:
      'Engineered a multi-class CNN using TensorFlow and Keras for classifying image data with high accuracy. Applied data augmentation and model optimization for performance improvement.',
    links: {
      github: 'https://github.com/freddysongg/MafWays',
      demo: 'https://youtu.be/1EdeTjw41lw'
    },
    skills: [
      'TensorFlow',
      'Keras',
      'Python',
      'Image Classification',
      'Data Augmentation',
    ],
  },
  {
    title: 'Rainfall Prediction for SF',
    description:
      'Built a linear regression model using Python and SciKit to predict rainfall patterns in San Francisco. Processed large datasets and optimized predictive performance with feature engineering.',
    links: {
      github: 'https://github.com/freddysongg/Weather-Model',
    },
    skills: [
      'Python',
      'Linear Regression',
      'SciKit',
      'Data Analysis',
      'Feature Engineering',
    ],
  },
  {
    title: 'Modded Word Hunt',
    description:
      'Enhanced Word Hunt game with customizable grids, power-ups, and advanced scoring mechanics.',
    links: {
      github: 'https://github.com/freddysongg/Modded-Word-Hunt',
      demo: 'https://www.youtube.com/embed/1WyHNnWpu44?vq=hd1080'
    },
    skills: [
      'C++',
      'CMake',
      'SFML',
      'Google Test',
      'Valgrind',
    ],
  },
  {
    title: 'Discord Bot',
    description:
      'A feature-rich Discord bot designed to enhance user interaction on Discord servers. It responds to commands, moderates chats, assigns roles, plays music in voice channels, and includes fun status updates for a dynamic experience.',
    links: {
      github: 'https://github.com/freddysongg/discord_bot',
    },
    skills: ['Discord API', 'Python'],
  },
  {
    title: 'Snakes Game',
    description:
      'A simple two-player browser game created using HTML, CSS, and JavaScript. Players move on a grid-based game board using separate sets of keys (arrow keys for Player 1 and WASD for Player 2), allowing simultaneous movement.',
    links: {
      github: 'https://github.com/freddysongg/Snakes-Game',
    },
    skills: ['JavaScript', 'GitHub', 'HTML', 'CSS'],
  },
];

function Projects() {
  return (
    <section id="projects" className="pt-16">
      <h2 className="text-4xl font-bold mb-12 gradient-text">Projects</h2>
      <div className="space-y-6 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-4">{project.title}</h3>
            <p className="text-gray-400 mb-6">{project.description}</p>
            <div className="flex gap-4">
              {project.links.github && (
                <a
                  href={project.links.github}
                  className="flex items-center gap-2 text-accent hover:opacity-80 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository <ExternalLink size={16} />
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  className="flex items-center gap-2 text-accent hover:opacity-80 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo <ExternalLink size={16} />
                </a>
              )}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="inline-flex rounded-full bg-neutral-700 px-2 py-1 text-xs font-medium text-white dark:bg-neutral-800"
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

export default Projects;
