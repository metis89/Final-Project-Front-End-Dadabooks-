import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BookRepository } from "../services/book.repository";
import { AppDispatch, RootState } from "../redux/store";
import {
  loadBookAsync,
  createBookAsync,
  deleteBookAsync,
} from "../redux/book.thunk";
// import { Book } from "../models/book";
import { url } from "../config";
import { Book } from "../models/book";

export function UseBooks() {
  const { token } = useSelector((state: RootState) => state.users);
  const { bookList } = useSelector((state: RootState) => state.books);
  const dispatch: AppDispatch = useDispatch();
  // let loadedBooks: Book[] = useMemo(() => [], []);
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

  // const handleLoadFiltered = useCallback(
  //   async (book: string) => {
  //     loadedBooks = await bookRepo.getFiltered(book);
  //     dispatch(loadBookAsync);
  //   },
  //   [bookRepo]
  // );

  const handleDelete = async (id: Book["id"]) => {
    await dispatch(
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
    // handleLoadFiltered,
    // handleEditBook,
    bookList,
    bookRepo,
  };
}
