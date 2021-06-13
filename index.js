const endPoint = "http://localhost:3000/api/v1/books"


// console log once the DOM is loaded 
document.addEventListener('DOMContentLoaded', () => {
    getBook()
  
});

function getBook() {
    fetch(endPoint)
    .then(res => res.json())
    .then(json => { 
        json.data.forEach(book => {
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

