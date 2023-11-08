import mongoose from "mongoose";

const bookModel = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        maxlength: 150,
        required: true
    },
    author: {
        type: String,
        maxlength: 150,
        required: true
    },
    genre: {
        type: String,
        maxlength: 50,
        required: true
    },
    pubYear: {
        type: Number,
        max: 2023,
        required: true
    }
}, { timestamps: true });


const Book = mongoose.model('Book', bookModel);

export default Book;