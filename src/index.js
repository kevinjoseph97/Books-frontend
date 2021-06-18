// const endPoint = "http://localhost:3000/api/v1/books"
let seeBookForm = false;





// so we can see what we are clicking on and dealing with 
document.addEventListener("click", (e) =>{ console.log("You just clicked on", e.target)})



// console log once the DOM is loaded 
document.addEventListener('DOMContentLoaded', () => {
    // getBook()
    API.fetchallBooks()



    // get the data from the form 
    const bookForm = document.querySelector("#create-book-form")
    // event to listen for the click on the form  
    bookForm.addEventListener("submit", (e) => createFormHandler(e))


    // set up form to hide or show 
    
    const bookFormContainer = document.querySelector('.form-container');
    const newBookButton = document.querySelector("#new-book-btn");

    // add event listener to the add btn to be able to toggle it 
    newBookButton.addEventListener("click", () => {

      seeBookForm = !seeBookForm;
      if (seeBookForm) {
        bookFormContainer.style.display = "block";
      } else {
        bookFormContainer.style.display = "none";
      }

     

    });
    
});





// render the books we have saved
// function getBook() {
//     fetch(endPoint)
//     .then(res => res.json())
//     .then(book => { 
//         book.data.forEach(book => {
//           // debugger;
//           // newBook is a instacnce of the book class 
//           let newBook = new Book(book, book.attributes )
//           document.querySelector('#book-container').innerHTML += newBook.renderBook()
          
//         })

//     });
// }







// implement a form handler adn make POST request
function createFormHandler(e) {
  e.preventDefault();
  // grab all the values
  // debugger;
  const userTitle = document.querySelector("#input-title").value
  const userAuthor = document.querySelector("#input-author").value
  const userImg = document.querySelector("#input-url").value
  const userGenre = document.querySelector("#genres").value
  const genreId = parseInt(userGenre)
  postFetch(userTitle, userAuthor, userImg, genreId)

  function postFetch(title, author, book_img, genre_id) {
    // console.log(title, author, book_img, genre_id);
    fetch(endPoint, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        title: title,
        author: author,
        book_img: book_img,
        genre_id: genre_id
      })
    })
    .then(response => response.json())
    .then(book => {
      // console.log(book);
      const bookData = book.data
      let newBook = new Book(bookData, bookData.attributes )
      document.querySelector('#book-container').innerHTML += newBook.renderBook()
  
  
    }) 
  
    
      
  }
  e.target.reset()
}








// delete book function
const selectedBook = document.querySelector("#book-container")
selectedBook.addEventListener("click", event =>{event.preventDefault();
    if (event.target.matches(".delete-btn")){
      console.log(event.target)

      const id = event.target.dataset.id
        
      
      fetch(`${endPoint}/${id}`, {
        method: "DELETE",
        headers: {"Content-Type": "application/json",
        'Accept': 'application/json'}
      })
      .then(response => response.json())
      .then(event.target.parentElement.remove())

    
    }
})



