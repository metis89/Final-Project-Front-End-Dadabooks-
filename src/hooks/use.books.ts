import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BookRepository } from "../services/book.repository";
import { AppDispatch, RootState } from "../redux/store";
import { load } from "../redux/books.slice";
import { Book } from "../models/book";

export function UseBooks() {
  const { books } = useSelector((state: RootState) => state.books);
  const { token } = useSelector((state: RootState) => state.users);
  const dispatch: AppDispatch = useDispatch();
  const url = "http://localhost:9900/";
  const bookRepo: BookRepository = useMemo(
    () => new BookRepository(url, token as string),
    []
  );

  const handleLoadBooks = useCallback(async () => {
    const books = await bookRepo.getAll();
    dispatch(load(books));
  }, [dispatch, bookRepo]);

  const handleAddBook = async (book: Book) => {
    const books = await bookRepo.create(book);
    dispatch(load(books));
  };

  return {
    handleLoadBooks,
    handleAddBook,
    books,
    bookRepo,
    url,
  };
}
//Con el hook grupamos funciones del estado

//1. nos coge libros del back y espero a que me lleguen --> la comunicacion con el back es asincrono
//2. los libros que llegan se guardardan en el estado --> el guardado es sincrono (lo hacemos a nivel local)
//3. El estado preparado y lo rellena con el array de los instrumentos gracias al reducer
