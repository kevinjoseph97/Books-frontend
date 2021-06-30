const baseURL = "http://localhost:3000/api/v1/books"
// let seeBookForm = true;
// let searchedBooks = [];
// let showeditForm = true;





// console log once the DOM is loaded 
document.addEventListener('DOMContentLoaded', (e) => {
    // getBook()
    API.fetchallBooks()
    
    API.fetchGenreBooks()

    // get the data from the form 
    const bookForm = document.querySelector("#create-book-form")
    // event to listen for the click on the form  
    bookForm.addEventListener("submit", (e) => createFormHandler(e))







    







    
    
  });


  // so we can see what we are clicking on and dealing with 
document.addEventListener("click", (e) =>{ console.log("You just clicked on", e.target)


  if (e.target.className === "like") {
    const id = e.target.dataset.id
    console.log(id)

    let i = 0
    Book.all.map(book => {
      if (book.id == id) {
          Book.all[i].fav =  !Book.all[i].fav;
          console.log(book)
      } i++;
  
    })

  }

})










  // search bar 
  const bookList = document.getElementById('bookList');
  const searchBar = document.getElementById("searchBar");
 
  
  searchBar.addEventListener('keyup', (e) => {
    // make this case sensitive... lowercase()
    const searchString = e.target.value.toLowerCase();

    const filteredBooks = Book.all.filter((book) =>{
     return (
      book.title.toLowerCase().includes(searchString)
     );
    });
      // console.log(filteredBooks)

    document.getElementById('bookList').innerHTML = " "
    filteredBooks.forEach(book => {
      document.getElementById('bookList').innerHTML += book.renderBook()
    })

    
    

  });









  // show books by genre
  function genreFunction(){
    // whenever the genre is changed we get back the books associated with
    API.fetchGenreBooks()
  }













// implement a form handler adn make POST request
function createFormHandler(e) {
  // makes the page not reload as default action would have 
  e.preventDefault();
  // grab all the values from what the user typed
  // debugger;
  const userTitle = document.querySelector("#input-title").value
  const userAuthor = document.querySelector("#input-author").value
  const userImg = document.querySelector("#input-url").value
  const userGenre = document.querySelector("#genres").value
  const genreId = parseInt(userGenre)
  postFetch(userTitle, userAuthor, userImg, genreId)

  // this is the post function that will get called above... 
  function postFetch(title, author, book_img, genre_id) {
    // console.log(title, author, book_img, genre_id);
    fetch(baseURL, {
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
      document.getElementById("bookList").innerHTML += newBook.renderBook()
    }) 
  
  }
  // resets the field with empty boxes 
  e.target.reset()
}








// delete book function
const selectedBook = document.getElementById("bookList")
selectedBook.addEventListener("click", event =>{event.preventDefault();
    if (event.target.matches(".delete-btn")){
      console.log(event.target)

      const id = event.target.dataset.id
        
      
      fetch(`${baseURL}/${id}`, {
        method: "DELETE",
        headers: {"Content-Type": "application/json",
        'Accept': 'application/json'}
      })
      .then(response => response.json())
      .then(event.target.parentElement.remove())
    }
})










// edit form 
// maybe move this function above
const editBook = document.getElementById("bookList")
console.log(editBook)
editBook.addEventListener("click", event =>{event.preventDefault();

  if (event.target.matches(".edit-btn")){

    // get info to put into the placeholder of form
    const bookEdit = event.target.parentElement
    console.log(bookEdit)
    const bookSE = bookEdit.querySelector("h3").innerText
    const bookSEauthor = bookEdit.querySelector("h2").innerText
    const bookSEimg = bookEdit.querySelector("img").innerText
    
    {console.log(bookSE)}
    {console.log(bookSEauthor)}
    


    const editForm = document.createElement("edit-form")
    editForm.innerHTML = `
    
      <br>
      <h2>Edit This Book</h2>


      <form class="book-edit-form">

      <br>
      <h4> Title:</h4>
      <input
      type="text" 
      name="title" 
      value="${bookSE}" 
      placeholder="${bookSE}" 
      class="input-edit-title"
      />
      <br>

      <h4> Author:</h4>
      <input
      type="text" 
      name="author" 
      value="${bookSEauthor}" 
      placeholder="${bookSEauthor}" 
      class="input-edit-author"
      />
      <br>

      <h4> Book IMG:</h4>
      <input
      type="text" 
      name="image" 
      value="" 
      placeholder="" 
      class="input-edit-img"
      />
      <br>

      <h4>Select a Genre:</h4>
      <select id="genres" name="genres">
        <option value="1">Comedy</option>
        <option value="2">History</option>
        <option value="3">Novel</option>
      </select>
      <br><br>

      <input
      type="submit"
      name="submit"
      value="Edit This Book"
      class="submit-btn"
      data-id=${event.target.dataset.id}
      />
      
      <br>


      <button class="close-btn">Close</button>
    
    </form>
    `

    {console.log(editForm)}

    bookEdit.append(editForm)
    {console.log(editBook)} 



    const closeBtn = editForm.querySelector(".close-btn")
    closeBtn.addEventListener("click", (e)=> {
    editForm.remove()
    })


  

    editForm.addEventListener("click", (event) =>{event.preventDefault();
     
    
      if (event.target.matches(".submit-btn")){
        let newTitle = editForm.querySelector(".input-edit-title").value
        console.log(newTitle)
        let newAuthor = editForm.querySelector(".input-edit-author").value
        console.log(newAuthor)
        let newImg = editForm.querySelector(".input-edit-img").value
        console.log(newImg)
        let newGenre = document.querySelector("#genres").value
        
        console.log(newGenre)


        const id = event.target.dataset.id
        console.log(id)


        fetch(`${baseURL}/${id}`, {
          method: "PATCH",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            title: newTitle,
            author: newAuthor,
            book_img: newImg,
            genre_id: newGenre
          }),
        })

        .then(response => response.json())
        .then(upBook => {
        debugger

          bookEdit.querySelector("h3").innerText = upBook.title
          bookEdit.querySelector("h2").innerText = upBook.author
          bookEdit.querySelector("img").src = upBook.book_img
          bookEdit.querySelector("p").innerText = upBook.genre_id
         
        })

      }
    
    })


    
  }


})



