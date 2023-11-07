import express from "express";
const router = express.Router();

import {
    create, getBooks, updateBook, getABook, deleteBook
} from '../../controller/book-Controller.js';



router.post('/books',create );
router.get('/books', getBooks);
router.put('/books/:id', updateBook);
router.get('/books/:id', getABook);
router.delete('/books/:id', deleteBook);


export default router;