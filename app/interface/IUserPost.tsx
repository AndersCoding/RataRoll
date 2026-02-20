export interface IUserPost {
    id: number;
    user: string;
    title: string;
    image: string;
    date: string;
    description: string;
    beltColor: string; // "white", "blue", "purple", "brown", "black"
    tags: string[];
}