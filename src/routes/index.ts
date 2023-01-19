import { Router } from "express";
import {
  createBook,
  deleteBookFromPage,
  getBooks,
  updateBook,
  updateBackBook,
} from "../controllers/books/index";

const router: Router = Router();

router.get("/", getBooks);
router.post("/create-book", createBook);
router.put("/update-book/:id", updateBook);
router.put("/update-back-book/:id", updateBackBook);
router.put("/delete-book/:id", deleteBookFromPage);
// router.delete("/delete-book/:id", deleteBook);

export default router;
