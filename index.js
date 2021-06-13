const endPoint = "http://localhost:3000/api/v1/books"


// console log once the DOM is loaded 
document.addEventListener('DOMContentLoaded', () => {
    getBook()
    
    // 
    const createBookForm = document.querySelector("#create-book-form")

    // 
    createBookForm.addEventListener("submit", (e) => createFormHandler(e))
    // prevent default 
  
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


function createFormHandler(e) {
  e.preventDefault()
  const titleInput = document.querySelector('#input-title').value
  const authorInput = document.querySelector('#input-author').value
  const imageInput = document.querySelector('#book_img').value
  const gnereInput = document.querySelector('#genres').value
  const gnereId = parseInt(gnereInput)
  postBook(titleInput, authorInput, imageInput, gnereInput)
}

function postBook(title, author, book_imng, genre_id) {
  console.log(title, author, book_imng, genre_id)

}