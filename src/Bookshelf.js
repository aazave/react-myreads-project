import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';


const Bookshelf = props => {

  const { shelfName, books } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book, index) => {
            if (shelfName.toLowerCase().replace(/\s/g, '') === book.shelf.toLowerCase()) {
              return (<Book
                key={book.id}
                book={book} />)
            }
          })}
        </ol>
      </div>
    </div>
  )

}

Bookshelf.propTypes = {
  shelfName: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired
}

export default Bookshelf;