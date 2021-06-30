// going to be our API..... 


class API {

    // static is how we assoicate things with the class 
    static BASE_URL = "http://localhost:3000/api/v1/books"
    static fetchallBooks() {

        fetch(this.BASE_URL)
        // API will send back JSON... change into js object 
        .then(response => response.json())
        //  return another promise ..log the object we got from API ... 
        .then(book => { 
            book.data.forEach(book => {
              // debugger;
              // newBook is a instacnce of the book class 
            //   being able to pass in a whole object from constructor
            // since wer're using fast json we get book.attributes
              let newBook = new Book(book, book.attributes )
              document.getElementById('bookList').innerHTML += newBook.renderBook() 
              
            })
    
        });
        
    }



    // get the basic genre table onto the DOM
   static GENRE_TABLE_URL = "http://localhost:3000/api/v1/genres"
   
    static fetchGenreBooks() {

     
      // getting the option from the selection menu
      var x = document.getElementById("book-genres");

      // {console.log(x.value)}
      
      fetch(`${this.GENRE_TABLE_URL}/${x.value}/books`)
      .then(response => response.json())
      .then(genre => {

        //  clearing out the html 
        document.querySelector('#genres-show').innerHTML = " "
        genre.data.forEach(genre => {

          // {console.log(genre)}

          let newGenre = new Genre(genre, genre.attributes)
          document.querySelector('#genres-show').innerHTML +=newGenre.renderGenre()
         
        })

    })

    
        
        
    }
          
}