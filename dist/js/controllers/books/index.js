"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editBook = exports.updateBackBook = exports.deleteBookFromPage = exports.updateBook = exports.createBook = exports.getBooks = void 0;
const book_1 = __importDefault(require("../../models/book"));
const getBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield book_1.default.find().sort({ _id: -1 });
        res.status(200).json({ books });
    }
    catch (error) {
        throw error;
    }
});
exports.getBooks = getBooks;
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const book = new book_1.default({
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
        const newBook = yield book.save();
        const allBooks = yield book_1.default.find().sort({ _id: -1 });
        res.status(201).json({
            message: "Book added",
            book: newBook,
            books: allBooks,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.createBook = createBook;
const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const updatedBook = yield book_1.default.findByIdAndUpdate({ _id: id }, body);
        const allBooks = yield book_1.default.find().sort({ _id: -1 });
        res.status(200).json({
            message: "Book updated",
            book: updatedBook,
            books: allBooks,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.updateBook = updateBook;
const updateBackBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const updatedBook = yield book_1.default.findByIdAndUpdate({ _id: id }, body);
        const allBooks = yield book_1.default.find().sort({ _id: -1 });
        res.status(200).json({
            message: "Book updated back",
            book: updatedBook,
            books: allBooks,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.updateBackBook = updateBackBook;
const editBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const editedBook = yield book_1.default.findByIdAndUpdate({ _id: id }, body).setOptions({ new: true, overwrite: true });
        const allBooks = yield book_1.default.find().sort({ _id: -1 });
        res.status(200).json({
            message: "Book edited",
            book: editedBook,
            books: allBooks,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.editBook = editBook;
const deleteBookFromPage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const updatedBook = yield book_1.default.findByIdAndUpdate({ _id: id }, body);
        const allBooks = yield book_1.default.find().sort({ _id: -1 });
        res.status(200).json({
            message: "Book remove from page",
            book: updatedBook,
            books: allBooks,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteBookFromPage = deleteBookFromPage;
