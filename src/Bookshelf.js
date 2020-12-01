import React from 'react';
import Book from './Book';

const Bookshelf = props => {

  const {shelfName, books} = props;

  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book, index) => {
            if (shelfName.toLowerCase().replace(/\s/g, '') === book.shelf.toLowerCase()) {
             return ( <Book key={index} 
              authors={book.authors} 
              image={book.imageLinks.thumbnail}
              title={book.title}
              shelf={book.shelf} /> )
            }
          })}
        </ol>
      </div>
    </div>
  )

}

export default Bookshelf;