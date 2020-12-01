import React from 'react';
import Book from './Book';


const Bookshelf = props => {

  const { shelfName, books, updateShelf } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => {
            if (shelfName.toLowerCase().replace(/\s/g, '') === book.shelf.toLowerCase()) {
              return (<Book
                key={book.id}
                book={book}
                updateShelf={updateShelf}
              />)
            } else {
              return null;
            }
          })}
        </ol>
      </div>
    </div>
  )

}



export default Bookshelf;