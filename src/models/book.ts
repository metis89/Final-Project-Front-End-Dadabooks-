import { Image } from "../types/image";

export type Book = {
  id: string;
  title: string;
  author: string;
  year: number;
  genre: string;
  synopsis: string;
  image: Image;
  books: Book[];
};
