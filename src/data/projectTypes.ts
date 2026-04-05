export type ProjectModalData = {
  heading: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
  /** Omit or leave empty to hide the button in the modal */
  visitUrl?: string;
  repoUrl?: string;
};

export type ProjectCardItem = {
  id: string;
  category: string;
  title: string;
  cardImage: string;
  cardImageAlt: string;
  aosDelay: number;
  modal?: ProjectModalData;
};
