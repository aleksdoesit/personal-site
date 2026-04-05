export type PortfolioModalData = {
  heading: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
  visitUrl: string;
  repoUrl: string;
};

export type PortfolioItem = {
  id: string;
  category: string;
  title: string;
  cardImage: string;
  cardImageAlt: string;
  aosDelay: number;
  modal?: PortfolioModalData;
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'robotrivia',
    category: 'Collaborative',
    title: 'RoboTrivia Quiz App - Click Here to Play!',
    cardImage: '/assets/trivia.svg',
    cardImageAlt: 'Cartoon image of a quiz game running on a phone',
    aosDelay: 150,
    modal: {
      heading: 'RoboTrivia!',
      image: '/assets/robotrivia.png',
      imageAlt: 'Screenshot of RoboTrivia',
      paragraphs: [
        'A collaborative project using mob programming to deliver a dynamic multiplayer trivia application. Designed and deployed under a strict turn-around time with the use of a GitHub and command line workflow.',
        'This project utilised React and dynamic API calls to generate questions from an array of categories. In addition scores are tracked and uploaded to a leaderboard hosted on Firebase.',
      ],
      visitUrl: 'https://robogames.github.io/RoboTrivia',
      repoUrl: 'https://github.com/RoboGames/RoboTrivia',
    },
  },
  {
    id: 'bingr',
    category: 'React Web App',
    title: 'Bingr - Find Your New Favourite Show!',
    cardImage: '/assets/movie.svg',
    cardImageAlt: 'Illustration for Bingr movie app',
    aosDelay: 300,
    modal: {
      heading: 'Bingr',
      image: '/assets/bingr.png',
      imageAlt: 'Screenshot of Bingr',
      paragraphs: [
        'A passion project application designed to be a one-stop place that currates TV show recommendations across all networks and platforms. Making use of React, React Router, and RESTful API calls to build a simple, snappy, and quick one-page React web app.',
        'Please note this is a work in progress! Responsiveness not yet fully functional :)',
      ],
      visitUrl: 'https://aleksdoesit.github.io/Bingr/#/',
      repoUrl: 'https://github.com/aleksdoesit/Bingr',
    },
  },
  {
    id: 'coming-soon',
    category: 'Coming Soon!',
    title: 'More Great Projects Coming',
    cardImage: '/assets/computer.svg',
    cardImageAlt: '',
    aosDelay: 450,
  },
];
