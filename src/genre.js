// set this up for genres 

class Genre {

    static all = [] 


    constructor(genre, genreAttributes ) {

      // debugger;
        this.id = genre.id, 
        // this.name = genre.attributes.genre.name
        this.title = genre.attributes.title
        // Genre.all.push(this)
    }


    // genreCard =()=> { console.log(this)
        
    //     return `
    //       <div data-id=${this.id}>
    //             <h2>${this.name}</h2>
    //       </div>
    //       <br><br>
    //     `;
    
    // }

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


// Genre.all = [];