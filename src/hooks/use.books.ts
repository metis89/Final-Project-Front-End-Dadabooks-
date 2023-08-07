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

  const bookRepo: BookRepository = useMemo(
    () => new BookRepository(url, token as string),
    [token]
  );

  const handleLoadBooks = useCallback(async () => {
    dispatch(loadBookAsync(bookRepo));
  }, [dispatch, bookRepo]);

  const handleAddBook = async (book: FormData) => {
    dispatch(createBookAsync({ repo: bookRepo, book }));
  };
  //  const handleEditBook

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
    bookList,
    bookRepo,
  };
}
