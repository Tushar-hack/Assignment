import BookService from "../service/book-Service.js";
import { StatusCodes } from "http-status-codes";
import {AppError} from '../utils/errors/index.js';

const bookService = new BookService();

const create = async (req, res) =>{
    try {
        const book = await bookService.createBook(req.body);
        return res.status(StatusCodes.CREATED).json({
            data: book,
            success: true,
            message: 'Successfully created the Book.',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode).json({
            data: {},
            success: false,
            message: error.message,
            err: error.explanation
        });
    }
}

const getBooks = async (req, res) => {
    try {
        const book = await bookService.getAllBooks();
        return res.status(StatusCodes.OK).json({
            data: book,
            success: true,
            message: 'Successfully fetched all the Books.',
            err: {}
        });
    } catch (error) {
        return res.status(error.statusCode).json({
            data: {},
            success: false,
            message: error.message,
            err: error.explanation
        });
    }
}

const updateBook = async (req, res) =>{
    try {
        const updatedBook = await bookService.updateBook(req.params.id, req.body );
        return res.status(StatusCodes.OK).json({
            data: updatedBook,
            success: true,
            message: 'Successfully updated the Book.',
            err: {}
        });
    } catch (error) {
        return res.status(error.statusCode).json({
            data: {},
            success: false,
            message: error.message,
            err: error.explanation
        });
    }
}

const getABook = async (req, res) =>{
    try {
       const singleBook = await bookService.getBook(req.params.id);
       return res.status(StatusCodes.OK).json({
        data: singleBook,
        success: true,
        message: 'Successfully fetched the Book.',
        err: {}
    });
    } catch (error) {
        return res.status(error.statusCode).json({
            data: {},
            success: false,
            message: error.message,
            err: error.explanation
        });
    }
}

const deleteBook = async (req, res) => {
    try {
        const response = await bookService.destroyBook(req.params.id);
        return res.status(StatusCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully deleted the book.',
            err: {}
        });
    } catch (error) {
        return res.status(error.statusCode).json({
            data: {},
            success: false,
            message: error.message,
            err: error.explanation
        });
    }
}
export {
    create,
    getBooks,
    updateBook,
    getABook,
    deleteBook
}