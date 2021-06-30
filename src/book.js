// console.log("heelo from book.js")
// object oriented js
// this because we want to know the specfic instance we want or create 


class Book {


  static all = []
  // calling constructor so we can initialize the  new object here 
  constructor(book, bookAttributes) {
    // debugger;
    // using this is like calling self in rails.. referening the current object  
    this.id = book.id
    this.title =  bookAttributes.title 
    this.author =  bookAttributes.author
    this.book_img =  bookAttributes.book_img
    this.genre =  bookAttributes.genre.name
    this.fav = false;
    Book.all.push(this)

  } 


  
  
  renderBook() {
    // debugger
    // console.log(this);

    let book = document.createElement('div')
    book.innerHTML = `
      <div data-id=${this.id} class="book" >
      <img src=${this.book_img} >
      <h3>${this.title}</h3>
      <h2>${this.author}</h2>
      
      <button data-id="${this.id}" class="delete-btn">Delete</button>
      <button data-id="${this.id}" class="edit-btn">Edit</button>
      
    </div>

   `;
    console.log(book)
    this.likeBtn(book)
    console.log(book)

    return book.innerHTML



    
  }

  likeBtn(book) {
    const likeButton = document.createElement("button")
    likeButton.innerText = "Like"
    likeButton.classList.add("like")
    likeButton.setAttribute("data-id", this.id)
    book.appendChild(likeButton)

  }




   static sortAuthor() {
    return Book.all.sort((a, b) => {
      if (a.author < b.author)
        return -1;
      if (a.author > b.author)
        return 1;
      return 0;
    })
  }




}
