import { StatusCodes } from 'http-status-codes';
import Book from '../models/book.js';
import {ValidationBookError , AppError, CastError} from '../utils/errors/index.js'; 

class BookRepository{
    async create(data) {
        try {
            const book = await Book.create(data);
            return book;
        } catch (error) {
            if(error.name == "ValidationError"){
                throw new ValidationBookError(error);
            }
            throw new AppError(
                'RepositoryError',
                'Cannot create User',
                'There was some issue creating a User, Please Try Again Later',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }
    async getAll() {
        try {
            const book = await Book.find();
            return book;
        } catch (error) {
            throw new AppError(
                'RepositoryError',
                'Cannot get Books',
                'There was some issue while fetching all the books, Please Try Again Later',
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }
    async get(id){
        try {
            const book = await Book.findById(id);
            return book;
        } catch (error) {
            if( error.name == "CastError"){
                throw new CastError(error);
            }
            throw new AppError(
                'RepositoryError',
                'Cannot get a Book',
                'There was some issue while fetching a book, Please Try Again Later',
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }
    async destroy(id) {
        try {
            const dltBook = await Book.findByIdAndRemove(id);
            return dltBook;
        } catch (error) {
            if( error.name == "CastError"){
                throw new CastError(error);
            }
            throw new AppError(
                'RepositoryError',
                'Cannot delete a Book',
                'There was some issue while deleting a book, Please Try Again Later',
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }
    async update(id, data) {
        try {
            const newUpdateBook = await Book.findByIdAndUpdate(id, data, {new: true});
            return newUpdateBook;
        } catch (error) {
            if( error.name == "CastError"){
                throw new CastError(error);
            }
            throw new AppError(
                'RepositoryError',
                'Cannot Update the Book',
                'There was some issue while Updating the Book, Please try again Later',
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }
}

export default BookRepository;