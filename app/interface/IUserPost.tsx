export interface IUserPost {
  id: string;
  user: string;
  title: string;
  image: string | { uri: string };
  date: string;
  description: string;
  beltColor: string;
  tags: string[];
  isUserPost?: boolean;
}
