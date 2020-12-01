import React, {Component} from 'react';
import Bookshelf from './Bookshelf';
import { Link } from 'react-router-dom'

class Bookcase extends Component { 

    state =  {
      bookShelves: ["Currently Reading" , "Want to Read", "Read"],
    }
    
    render() {

        const {books} = this.props;
        const {bookShelves} = this.state;

        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
             {bookShelves.map((shelf) => (
             <Bookshelf key={shelf} shelfName={shelf} books={books} />   
             ))}  
            </div>
            <div className="open-search">
            <Link to='/search' className='add-contact' ><button>Add a book</button></Link>
            </div>
          </div>
        )
    }

}

export default Bookcase;