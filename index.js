const endPoint = "http://localhost:3000/api/v1/books"


// console log once the DOM is loaded 
document.addEventListener('DOMContentLoaded', () => {
    getBook()
    
    // get the data from the form 
    const createBookForm = document.querySelector("#create-book-form")

    // event to listen for the click on the form and prvent the default 
    createBookForm.addEventListener("submit", (e) => createFormHandler(e))
  
});

function getBook() {
    fetch(endPoint)
    .then(res => res.json())
    .then(book => { 
        book.data.forEach(book => {
          const bookMarkup = `
          <div data-id=${book.id}>
            <img src=${book.attributes.book_img} height="200" width="250">
            <h3>${book.attributes.title}</h3>
            <p>${book.attributes.genre.name}</p>
            <button data-id=${book.id}>edit</button>
          </div>
          <br><br>`;

          document.querySelector('#book-container').innerHTML += bookMarkup
        })

    });
}


// implement a form handler adn make POST request
function createFormHandler(e) {
  e.preventDefault()
  // grab all the values
  // debugger;
  const userTitle = document.querySelector("#input-title").value
  const userAuthor = document.querySelector("#input-author").value
  const userImg = document.querySelector("#input-url").value
  const userGenre = document.querySelector("#genres").value
  const genreId = parseInt(userGenre)
  postFetch(userTitle, userAuthor, userImg, genreId)
}


function postFetch(title, author, book_img, genre_id) {
  // console.log(title, author, book_img, genre_id);
  fetch("http://localhost:3000/api/v1/books", {
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
    const bookMarkup = `
    <div data-id=${book.id}>
      <img src=${bookData.attributes.book_img} height="200" width="250">
      <h3>${bookData.attributes.title}</h3>
      <p>${bookData.attributes.genre.name}</p>
      <button data-id=${book.id}>edit</button>
    </div>
    <br><br>`;

    document.querySelector('#book-container').innerHTML += bookMarkup
  })
    
  }


