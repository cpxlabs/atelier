export interface CategoryItem {
  icon: string;
  label: string;
  subtitle: string;
  color: string;
}

export interface PaperCard {
  id: string;
  type: string;
  size: string;
  title: string;
  description: string;
  lastRead: string;
  image?: string;
  bgColor: string;
}

export interface NotebookItem {
  id: string;
  title: string;
  words: string;
  modified: string;
  color: string;
}
