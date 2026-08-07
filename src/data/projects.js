export const projects = [
  {
    id: 'globelog',
    slug: 'globelog',
    title: 'GlobeLog',
    ariaLabel: 'GlobeLog project',
    githubUrl: 'https://github.com/rud-y/worldexplore',
    image: {
      src: '/images/globelog_2.jpg',
      width: 200,
      height: 200,
      alt: 'Image of GlobeLog application screenshot',
    },
    listing: {
      heading: 'GlobeLog',
      ariaLabel: 'GlobeLog travel journal project description',
      paragraphs: [
        'An interactive travel journaling application that allows users to map their global journeys and document local experiences. Built with React and TypeScript for type-safe, scalable UI development Integrated Leaflet.js for dynamic, interactive map interface.',
        'State & Auth: Orchestrated global state via Context API and implemented secure, persistent user flows using Supabase.',
      ],
      techStack: 'Typescript, React.js, ContextAPI, REST API, State management, User Authentication, Supabase, PostgreSQL',
      appLink: {
        href: 'https://globelog.netlify.app/',
        label: 'OPEN APP',
      },
      media: {
        type: 'image',
        src: '/images/globelog.jpg',
        alt: 'GlobeLog app image',
      },
    },
  },
  {
    id: 'splitit',
    slug: 'splititapp',
    title: 'SplitItApp',
    ariaLabel: 'Eat and Split project',
    githubUrl: 'https://github.com/rud-y/eatAndSplit',
    image: {
      src: '/images/splititapp_2.jpg',
      width: 200,
      height: 200,
      alt: 'Image of Eat and split application screenshot',
    },
    listing: {
      heading: 'SplitItApp',
      ariaLabel: 'Eat and split tracker project description',
      paragraphs: [
        "A web app tracking bill expenses when going out with friends. Functionality includes an option to add a new friends to the existing list, splitting a bill amount between two people, adjusting a friend's balance state accordingly. Tracking of the overall balance.",
      ],
      techStack: 'React.js; controlled components',
      appLink: {
        href: 'https://splititupapp.netlify.app/',
        label: 'OPEN APP',
      },
      media: {
        type: 'image',
        src: '/images/splititapp.jpg',
        alt: 'Eat and split app image',
      },
    },
  },
  {
    id: 'rps',
    slug: 'rock-paper-scissors',
    title: 'Rock Paper Scissors',
    ariaLabel: 'Rock, paper, scissors project',
    githubUrl: 'https://github.com/rud-y/rockpaperscissors',
    image: {
      src: '/images/rockpaperscissors.png',
      width: 295,
      height: 200,
      alt: 'Rock paper scissors image',
    },
    listing: {
      heading: 'Rock - Paper - Scissors',
      ariaLabel: 'Rock Paper Scissors description',
      paragraphs: [
        'A responsive web game featuring a human-vs-computer interface. This project is built on clean Vanilla JS logic for score tracking, win/loss conditions, and interactive CSS.',
      ],
      techStack: 'Vanilla JavaScript',
      appLink: {
        href: 'https://rockpapersciss.netlify.app/',
        label: 'OPEN APP',
      },
      media: {
        type: 'video',
        src: '/demos/rockdemo.mp4',
        caption: 'Game demo',
        alt: 'Rock Paper Scissors demo',
      },
    },
  },
  {
    id: 'vet',
    slug: 'vet-management',
    title: 'Vet Management app',
    ariaLabel: 'Vet management project',
    githubUrl: 'https://github.com/rud-y/Veterinary_practice_project',
    image: {
      src: '/images/paw.svg',
      width: 200,
      height: 200,
      alt: "Image of a dog's paw",
    },
    listing: {
      heading: 'Vet management app',
      ariaLabel: 'Vet management project description',
      paragraphs: [
        'A full-stack CRUD application designed to streamline operations for a small veterinary clinic. This project focuses on managing the complex relationships between pet patients, their owners, and available veterinarians.',
      ],
      techStackHeading: 'Tech Stack',
      techDetails: [
        'This application is built using the MVC (Model-View-Controller) design pattern to ensure a clean separation of concerns and scalable code.',
        'Backend: Leveraged Ruby and the Sinatra web framework to manage server-side logic and complex request routing.',
        'Persistence: Integrated PostgreSQL to handle relational data storage and maintain the integrity of user-generated content.',
      ],
      media: {
        type: 'video',
        src: '/demos/jaws_demo.mp4',
        caption: 'Demo',
        alt: 'Veterinary practice project demo',
      },
    },
  },
  {
    id: 'tournament',
    slug: 'tournament-manager',
    title: 'Tournament manager',
    ariaLabel: 'Tournament manager project',
    githubUrl: 'https://github.com/rud-y/tournament_manager_client',
    githubServerUrl: 'https://github.com/rud-y/tournament_manager_server',
    image: {
      src: '/images/tournament/homepage.png',
      width: 270,
      height: 200,
      alt: 'An image of a league table',
    },
    listing: {
      heading: 'Tournament manager',
      ariaLabel: 'Tournament manager description',
      paragraphs: [
        'This application allows users to digitize their tournaments, providing a central hub for teams, fixtures, and live standings.',
        'Once a user enters a match result, the application handles the heavy lifting - immediately updating the league table and adjusting team rankings based on performance.',
      ],
      techStackHeading: 'Tech Stack',
      techDetails: [
        'Back-end: Spring framework with Hibernate - Object Relational Mapping.',
        'Front-end: React.js.',
      ],
      media: {
        type: 'image',
        src: '/images/tournament/results_list_table_updated.png',
        alt: 'League table image',
      },
    },
  },
  {
    id: 'dobble',
    slug: 'dobble',
    title: 'Dobble browser game',
    ariaLabel: 'Dobble game project',
    githubUrl: 'https://github.com/rud-y/dobble',
    image: {
      src: '/images/dobble_pic.png',
      width: 200,
      height: 200,
      alt: 'Image of a Dobble game',
    },
    listing: {
      heading: 'Dobble',
      ariaLabel: 'Dobble web app game project description',
      paragraphs: [
        'A fast-paced, browser-based adaptation of the classic card game, developed as a collaborative team effort. The application challenges users to identify matching symbols between two cards under a timed countdown.',
        'Key features: Real-time symbol synchronization, dynamic score tracking, and an integrated game timer.',
      ],
      techStackHeading: 'Tech Stack',
      techDetails: [
        'Front-end: Vue.js',
        'Back-end: Express server, MongoDB',
      ],
      media: {
        type: 'video',
        src: '/demos/dobble_demo.mp4',
        caption: 'Demo',
        alt: 'Dobble game demo',
      },
    },
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
