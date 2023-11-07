# How to get Started
    - Clone the Repo in your Working Directory.
    - Make sure Node is installed in your system.
    - Make sure MongoDB Community Server is installed in your system and Running.
    - Run : 
        ```npm install```
         ```npm start```

# Books Endpoints

    Note: All data should be sent in JSON.

    - Create a Book
        - Path : /api/v1/books
        - Method : POST
        - Request Body : {
            "title" : "Book-1",
            "author" : "Tushar",
            "genre" : "Fiction",
            "pubYear" : 2001
        }
        Note : All fields are Necessary.
        - Response Body : 
            - On_Success : {
                data: created_book_data,
                success: true,
                message: 'Successfully created the Book',
                err: {}
            }
            - On_Error : {
                data: {},
                success: false,
                message: "Message_Here",
                err: "Explanation_of_Error_Here"
            }
    
    - Get all Books
        - Path : /api/v1/books
        - Method : GET
        - Request Body : {
            // Nothing To Pass Here
        }
        - Response Body : 
            - On_Success : {
                data: [{Book_1}, {Book_2},...],
                success: true,
                message: 'Successfully fetched all the Books.',
                err: {}
            }
            - On_Error : {
                data: {},
                success: false,
                message: "Message_Here",
                err: "Explanation_of_Error_Here"
            }
    
    - Get a Single Book
        - Path : /api/v1/books/{Book_id_here}
        - Method : GET
        - Request Body : {
            // Nothing To Pass Here
        }
        - Response Body : 
            - On_Success : {
                data: Book_Details,
                success: true,
                message: 'Successfully fetched the Book.',
                err: {}
            }
            - On_Error : {
                data: {},
                success: false,
                message: "Message_Here",
                err: "Explanation_of_Error_Here"
            }

    - Update a Book
        - Path : /api/v1/books/{Book_id_here}
        - Method : PUT
        - Request Body : {
            "field_name" : "Value_here"
        }
        Note : Can put multiple fields here.
        - Response Body :
            - On_Success : {
                data: Updated_Book_Details,
                success: true,
                message: 'Successfully Updated the Book.',
                err: {}
            }
            - On_Error : {
                data: {},
                success: false,
                message: "Message_Here",
                err: "Explanation_of_Error_Here"
            }

    - Delete a Book
        - Path : /api/v1/books/{Book_id_here}
        - Method : DELETE
        - Request Body : {
            // Nothing To Pass Here
        }
        - Response Body : 
            - On_Success : {
                data: true,
                success: true,
                message: 'Successfully deleted the Book.',
                err: {}
            }
            - On_Error : {
                data: {},
                success: false,
                message: "Message_Here",
                err: "Explanation_of_Error_Here"
            }
