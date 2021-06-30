// set this up for genres for instaces of its self

class Genre {

  // can only be called on the class itsef
  // same as calling (@@all)
  static all = [] 


  constructor(genre, genreAttributes ) {

    // debugger;
      this.id = genre.id, 
      // this.name = genre.attributes.genre.name
      this.title = genre.attributes.title
      // we don/t want to push in the same genre everytime its called ...bascially creating it over again 
      // Genre.all.push(this)
  }


  

  renderGenre() {
      // debugger
      // console.log(this);
      return `
        <div data-id=${this.id}>
          <h1>${this.title}</h1>
        </div>
        <br><br>
      `;
    
              
  }   


}

