// going to be our API..... 


class API {

    // static is how we assoicate things with the class 
    static BASE_URL = "http://localhost:3000/api/v1/books"
    static fetchallBooks() {

        fetch(this.BASE_URL)
        .then(response => response.json())
        .then(book => { 
            book.data.forEach(book => {
              // debugger;
              // newBook is a instacnce of the book class 
              let newBook = new Book(book, book.attributes )
              document.querySelector('#book-container').innerHTML += newBook.renderBook()
              
            })
    
        });
        
    }

}