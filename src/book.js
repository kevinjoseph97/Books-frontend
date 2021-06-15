// console.log("heelo from book.js")
// create this because we want to know the specfic object we want
class Book {

    constructor(book, bookAttributes) {
        // debugger;
        this.id = book.id
        this.title =  bookAttributes.title 
        this.author =  bookAttributes.author
        this.book_img =  bookAttributes.book_img
        this.genre =  bookAttributes.genre
        Book.all.push(this)
    
    } 
    render() {
        debugger
        // console.log(this);
        return `
                <div data-id=${this.id}>
                  <img src=${this.book_img} height="200" width="250">
                  <h3>${this.title}</h3>
                  <p>${this.name}</p>
                  <button data-id=${this.id}>edit</button>
                </div>
                <br><br>`;
      
               
      }
}


Book.all = [];