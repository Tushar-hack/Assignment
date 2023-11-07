import {StatusCodes} from "http-status-codes";

class ValidationBookError extends Error{
    constructor(err){
        super();
        var explanation
        if(err.errors.title){
            explanation = err.errors.title.message;
        }else if (err.errors.author) {
            explanation = err.errors.author.message;
        }else if(err.errors.genre) {
            explanation = err.errors.genre.message;
        }else {
            explanation = err.errors.pubYear.message;
        }

        this.name = err.name,
        this.message = err._message,
        this.explanation = explanation,
        this.statusCode = StatusCodes.BAD_REQUEST
    } 
}

export default ValidationBookError;