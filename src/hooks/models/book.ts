export type Book = {
  id: string;
  title: string;
  author: string;
  year: number;
  genre: string;
  synopsis: string;
  books: Book[];
  image: {
    urlOriginal: string;
    url: string;
    mimetype: string;
    size: number;
  };
};
