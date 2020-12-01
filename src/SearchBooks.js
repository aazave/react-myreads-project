import React, { Component } from 'react';
import Book from './Book';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {

  state = {
    query: '',
    searchbooks: []
  }

  updateQuery = query => {

    this.setState(() => ({
      query: query,
      searchbooks: []
    }))

    this.bookQuery(query)
  }

  bookQuery = (query) => {
    if (query !== '') {
      BooksAPI.search(query)
        .then((books) => {
          if ((books !== undefined && !books.error)) {
            const updatedBooks = this.updateBookShelfState(books)
            this.setState(() => ({
              searchbooks: updatedBooks
            }))
          }
        })
    }
  }

  updateBookShelfState = (books) => {
    for (const book of books) {
      book.shelf = 'none';
      for (const shelfbook of this.props.books) {
        if (book.id === shelfbook.id) book.shelf = shelfbook.shelf
      }
    }

    return books;

  }

  updateShelfHandler = (book, shelf) => {
    book.shelf = shelf;
    this.props.updateShelf(book, shelf)
  }


  render() {
    const { query, searchbooks } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className='close-search' ></Link>
          <div className="search-books-input-wrapper">
            <input type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)} />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {(searchbooks !== undefined && !searchbooks.error) && searchbooks.map((book) => (
              <Book key={book.id}
                book={book}
                updateShelf={this.updateShelfHandler}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }

}

export default SearchBooks;