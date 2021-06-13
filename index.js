const endPoint = "http://localhost:3000/api/v1/books"


// console log once the DOM is loaded 
document.addEventListener('DOMContentLoaded', () => {
    getBook()
  
});

function getBook() {
    fetch(endPoint)
    .then(res => res.json())
    .then(json => console.log(json));
}

