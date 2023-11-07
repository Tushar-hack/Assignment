import { StatusCodes } from 'http-status-codes';
import BookRepository from '../repository/book-Repository.js';
import {AppError, ServiceError} from '../utils/errors/index.js';

class BookService{
    constructor() {
        this.BookRepository = new BookRepository();
    }

    async createBook(data){
        try {
            const createBook = await this.BookRepository.create(data);
            return createBook;
        } catch (error) {
            if(error.name == 'ValidationError' || error.name == 'RepositoryError'){
                throw new ServiceError(error);
            }
            throw new AppError(
                'ServiceError',
                'Cannot create Book',
                'There was some issue creating a Book, Please Try Again Later',
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }
    async getAllBooks(){
        try {
            const getBooks = await this.BookRepository.getAll();
            return getBooks;
        } catch (error) {
            if(error.name == 'RepositoryError'){
                throw new ServiceError(error);
            }
            throw new AppError(
                'ServiceError',
                'Cannot get all Books',
                'There was some issue while fetching all the Books, Please Try Again Later',
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }
    async getBook(id){
        try {
            const getBook = await this.BookRepository.get(id);
            if(Object.is(getBook, null)) {
                throw new AppError(
                    "NotFoundError",
                    "Book NOT Found.",
                    "No Book Found with this ID.",
                    StatusCodes.NOT_FOUND
                )
            }
            return getBook;
        } catch (error) {
            if(error.name == 'CastError' || error.name == 'RepositoryError'){
                throw new ServiceError(error); 
            }
            if(error.name == "NotFoundError"){
                throw new AppError(
                    error.name,
                    error.message,
                    error.explanation,
                    error.statusCode
                );
            }
            throw new AppError(
                'ServiceError',
                'Cannot get a Book',
                'There was some issue while fetching that book, PLease try again!!',
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }
    async destroyBook(id){
        try {
            const dltBook = await this.BookRepository.destroy(id);
            if(Object.is(dltBook, null)){
                throw new AppError(
                    "NotFoundError",
                    "Book NOT Found.",
                    "No Book Found with this ID.",
                    StatusCodes.NOT_FOUND
                )
            }
            return true;
        } catch (error) {
            if(error.name == 'CastError' || error.name == 'RepositoryError'){
                throw new ServiceError(error); 
            }
            if(error.name == "NotFoundError"){
                throw new AppError(
                    error.name,
                    error.message,
                    error.explanation,
                    error.statusCode
                );
            }
            throw new AppError(
                'ServiceError',
                'Cannot delete a Book',
                'There was some issue while deleting a book, PLease try again!!',
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }
    async updateBook(id, data){
        try {
            if(JSON.stringify(data) === '{}'){
                throw new AppError(
                    "NoContentFound",
                    "Content NOT Found",
                    "No Content Found to update",
                    StatusCodes.NOT_FOUND
                )
            }
            const updatedBook = await this.BookRepository.update(id, data);
            if(Object.is(updatedBook, null)) {
                throw new AppError(
                    "NotFoundError",
                    "Book NOT Found.",
                    "No Book Found with this ID.",
                    StatusCodes.NOT_FOUND
                )
            }
            return updatedBook;
        } catch (error) {
            if(error.name == 'CastError' || error.name == 'RepositoryError'){
                throw new ServiceError(error); 
            }
            if(error.name == "NotFoundError" || error.name == "NoContentFound"){
                throw new AppError(
                    error.name,
                    error.message,
                    error.explanation,
                    error.statusCode
                );
            }
            throw new ServiceError(
                'ServiceError',
                'Cannot Update a Book',
                'There was some issue while Updating the Book, Please try again Later',
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }
}

export default BookService;