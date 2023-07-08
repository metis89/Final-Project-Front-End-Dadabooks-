import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BookRepository } from "../services/book.repository";
import { AppDispatch, RootState } from "../redux/store";
import {
  loadBookAsync,
  createBookAsync,
  deleteBookAsync,
} from "../redux/books.slice";
// import { Book } from "../models/book";
import { url } from "../config";

export function UseBooks() {
  const { token } = useSelector((state: RootState) => state.users);
  const { bookList } = useSelector((state: RootState) => state.books);
  const dispatch: AppDispatch = useDispatch();

  const bookRepo: BookRepository = useMemo(
    () => new BookRepository(url, token as string),
    [token]
  );

  const handleLoadBooks = useCallback(async () => {
    console.log("Handle Load");
    dispatch(loadBookAsync(bookRepo));
  }, [dispatch, bookRepo]);

  const handleAddBook = async (book: FormData) => {
    console.log("handle add book process");
    dispatch(createBookAsync({ repo: bookRepo, book }));
    console.log("register book submitted");
  };

  // const handleEditBook = async (data: Partial<Book>) => {
  //   dispatch(editBookAsync({ repo, data }));
  // };

  const handleDelete = async (id: string) => {
    dispatch(
      deleteBookAsync({
        repo: bookRepo,
        id,
      })
    );
  };

  return {
    handleLoadBooks,
    handleAddBook,
    handleDelete,
    // handleEditBook,
    bookList,
    bookRepo,
  };
}
//Con el hook grupamos funciones del estado

//1. nos coge libros del back y espero a que me lleguen --> la comunicacion con el back es asincrono
//2. los libros que llegan se guardardan en el estado --> el guardado es sincrono (lo hacemos a nivel local)
//3. El estado preparado y lo rellena con el array de los instrumentos gracias al reducer
