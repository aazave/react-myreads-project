import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { authors, imageLinks, title, shelf } = props.book;
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${!!imageLinks && imageLinks.thumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select value={shelf}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">
          {(authors !== undefined && !!authors.length) && authors.map((author) => (<div key={author}>{author}</div>))}</div>
      </div>
    </li>
  )

}

Book.propTypes = {
  authors: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  shelf: PropTypes.string.isRequired
}

export default Book;