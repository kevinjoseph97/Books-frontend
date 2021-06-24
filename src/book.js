// console.log("heelo from book.js")
// object oriented js
// this because we want to know the specfic instance we want or create 


class Book {

    constructor(book, bookAttributes) {
        // debugger;
        // using this is like calling self in rails.. 
        this.id = book.id
        this.title =  bookAttributes.title 
        this.author =  bookAttributes.author
        this.book_img =  bookAttributes.book_img
        this.genre =  bookAttributes.genre.name
        Book.all.push(this)
    
    } 

    
    // function within this book class so we don't need const 
    renderBook() {
        // debugger
        // console.log(this);
        return `
          <div data-id=${this.id}>
            <img src=${this.book_img} >
            <h3>${this.title}</h3>
            <h2>${this.author}</h2>
            
            <button data-id="${this.id}" class="delete-btn">Delete</button>
            <button data-id="${this.id}" class="edit-btn">Edit</button>
            <button data-id="${this.id}" 
            <i onclick="myFunction(this)" class="fa fa-thumbs-up"></i>
          </div>

          <br><br>
        `;
      
               
      }




}

Book.all = [];

