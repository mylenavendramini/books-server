"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../controllers/books/index");
const router = (0, express_1.Router)();
router.get("/", index_1.getBooks);
router.post("/create-book", index_1.createBook);
router.put("/update-book/:id", index_1.updateBook);
router.put("/update-back-book/:id", index_1.updateBackBook);
router.put("/edit-book/:id", index_1.editBook);
router.put("/delete-book/:id", index_1.deleteBookFromPage);
// router.delete("/delete-book/:id", deleteBook);
exports.default = router;
