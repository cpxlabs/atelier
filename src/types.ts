export interface PostProps {
  id: string;
  user: string;
  content: string;
  image?: string;
  likes: string;
  comments: string;
}

export interface StoryUser {
  name: string;
}
