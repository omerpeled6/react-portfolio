import NBA from '../../public/projects/nba.png'
import TAXI from '../../public/projects/taxi.jpeg'

export const HERO_CONTENT = `I am a hardworking and ambitious full-stack developer with a B.Sc. in Computer Science from HIT Holon. With strong self-learning abilities and a proven capacity to manage multiple projects, I excel in both team-oriented and independent work environments. Skilled in modern technologies like React, Next.js, Node.js, and MongoDB, I am passionate about solving complex challenges and delivering impactful solutions. My goal is to leverage my technical expertise to create innovative web applications that provide exceptional user experiences and drive business success.`
export const ABOUT_TEXT = `👋 Hi, I’m Omer Peled!
I’m a 25-year-old software developer live in Tel Aviv. Here’s a bit more about me:

Hobbies & Interests
	•	🎸 Playing guitar and exploring my creative side through music.
	•	🏋️‍♂️ Fitness enthusiast: Gym , Crossfit
	•	Running marathons 🏃‍♂️.
	•	Playing basketball 🏀.
Work & Skills
	•	💻 Software Developer: Passionate about creating impactful, efficient solutions.
	•	📚 Private Tutor: Specializing in Mathematics and Software, I help students simplify complex concepts and achieve success.
Personal Values

	•	🌟 Committed to personal growth and lifelong learning.
	•	😊 Spreading positive energy in everything I do.
	•	🤝 Building meaningful connections in both my professional and personal life.`
export const EXPERIENCES = [
  {
    year: '2023',
    role: 'Frontend Developer',
    company: 'Ooti (Startup)',
    description: `Developed a web-based messenger application using React.js. Collaborated closely with the front-end development team to achieve project goals. Focused on client-side development, implementing designs with Material-UI while gaining proficiency in core web technologies like HTML, CSS, and JavaScript.`,
    technologies: ['React.js', 'Material-UI', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    year: '2022 - Present',
    role: 'Youth Guide',
    company: 'Yehud-Monosson Municipality',
    description: `Led and guided youth in educational programs, focusing on personal development and team-building skills. Maintained effective communication and mentoring to achieve program goals.`,
    technologies: ['Leadership', 'Mentoring', 'Team Building'],
  },
  {
    year: '2017 - Present',
    role: 'Private Tutor',
    company: 'Self-Employed',
    description: `Provided personalized tutoring services in mathematics and computer science. Developed tailored lesson plans to meet individual student needs and learning styles.`,
    technologies: ['Teaching', 'Mathematics', 'Computer Science'],
  },
  {
    year: '2020 - 2021',
    role: 'Electronics Instructor',
    company: 'ETGAR Sciences Ltd.',
    description: `Trained students in electronics basics, teaching complex concepts in an accessible manner. Developed and delivered engaging lessons to promote learning and interest in technology.`,
    technologies: ['Teaching', 'Electronics', 'Curriculum Design'],
  },
]

export const PROJECTS = [
  {
    title: 'Social Network Store for NBA',
    image: NBA,
    URL: 'https://nba-app-android2.onrender.com/login',
    Github: 'https://github.com/omerpeled6/NBA-APP-Android2',
    description: `Developed a web application integrating RESTful APIs with a React.js frontend. Engineered backend architecture using Express and Node.js. Managed MongoDB databases with Mongoose, implemented JWT authentication, and ensured data integrity with Validator.`,

    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'CSS Modules',
    ],
  },
  {
    title: 'Autonomous Taxi Service 🚖',
    image: TAXI,
    URL: 'https://autonomous-taxi-service.onrender.com',
    Github: 'https://github.com/omerpeled6/autonomous-taxi-service',
    description: `A simulation of an Autonomous Taxi Service in a fictional city. The system simulates 10 autonomous taxis providing rides in a 20x20 km grid. Features include real-time updates, dynamic ride requests, taxi allocation, and data visualization.`,
    technologies: [
      'React.js',
      'Vite.js',
      'Tailwind CSS',
      'JavaScript',
      'Utility Functions',
    ],
  },
]

export const CONTACT = {
  address: 'Tel-Aviv, Israel',
  phoneNo: '+972 50-8334100',
  email: 'opeled6@gmail.com',
}
