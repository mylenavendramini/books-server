import { Response, Request } from "express";
import { Ibook } from "../../types/book";
import Book from "../../models/book";

const getBooks = async (req: Request, res: Response): Promise<void> => {
  try {
    const books: Ibook[] = await Book.find().sort({ _id: -1 });
    res.status(200).json({ books });
  } catch (error) {
    throw error;
  }
};

const createBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<
      Ibook,
      | "name"
      | "category"
      | "imageUrl"
      | "price"
      | "pages"
      | "date"
      | "description"
      | "firstCap"
      | "jornal"
      | "review"
      | "status"
      | "show"
    >;
    const book: Ibook = new Book({
      name: body.name,
      category: body.category,
      imageUrl: body.imageUrl,
      price: body.price,
      pages: body.pages,
      date: body.date,
      description: body.description,
      firstCap: body.firstCap,
      jornal: body.jornal,
      review: body.review,
      status: body.status,
      show: body.show,
    });
    const newBook: Ibook = await book.save();
    const allBooks: Ibook[] = await Book.find().sort({ _id: -1 });
    res.status(201).json({
      message: "Book added",
      book: newBook,
      books: allBooks,
    });
  } catch (error) {
    throw error;
  }
};

const updateBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const updatedBook: Ibook | null = await Book.findByIdAndUpdate(
      { _id: id },
      body
    );
    const allBooks: Ibook[] = await Book.find().sort({ _id: -1 });
    res.status(200).json({
      message: "Book updated",
      book: updatedBook,
      books: allBooks,
    });
  } catch (error) {
    throw error;
  }
};

const updateBackBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const updatedBook: Ibook | null = await Book.findByIdAndUpdate(
      { _id: id },
      body
    );
    const allBooks: Ibook[] = await Book.find().sort({ _id: -1 });
    res.status(200).json({
      message: "Book updated back",
      book: updatedBook,
      books: allBooks,
    });
  } catch (error) {
    throw error;
  }
};

const deleteBookFromPage = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const updatedBook: Ibook | null = await Book.findByIdAndUpdate(
      { _id: id },
      body
    );
    const allBooks: Ibook[] = await Book.find().sort({ _id: -1 });
    res.status(200).json({
      message: "Book remove from page",
      book: updatedBook,
      books: allBooks,
    });
  } catch (error) {
    throw error;
  }
};

// const deleteBook = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const deletedBook: Ibook | null = await Book.findByIdAndRemove(
//       req.params.id
//     );
//     const allBooks: Ibook[] = await Book.find();
//     res.status(200).json({
//       message: "Book deleted",
//       book: deletedBook,
//       books: allBooks,
//     });
//   } catch (error) {
//     throw error;
//   }
// };

export { getBooks, createBook, updateBook, deleteBookFromPage, updateBackBook };
