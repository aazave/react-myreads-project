import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import Bookcase from './Bookcase'
import SearchBooks from './SearchBooks'

class BooksApp extends Component {
   state = {
      books: []
   }


   componentDidMount() {
      this.refreshBooks()
   }

   refreshBooks = () => {
      BooksAPI.getAll()
         .then((books) => {
            this.setState(() => ({
               books
            }))
         })
   }

   doesBookExist = (bookID) => {

      for (const book of this.state.books) {
         if (book.id === bookID) {
            return true;
         }
      }
      return false;

   }


   updateShelfHandler = (book, shelf) => {
      const val = this.doesBookExist(book.id);
      BooksAPI.update(book, shelf)
         .then(() => {
            (val) ? this.refreshBooks() : this.addBook(book.id)
         })

   }

   addBook = async (bookID) => {
      BooksAPI.get(bookID)
         .then((book) => {
            this.setState((currentState) => ({
               books: [...currentState.books, book]
            }))
         })

   }


   render() {
      const { books } = this.state;

      return (
         <div className="app">

            <Route exact path='/' render={() => (
               <Bookcase books={books} updateShelf={this.updateShelfHandler} />
            )}
            />

            <Route path='/search' render={() => (
               <SearchBooks books={books} updateShelf={this.updateShelfHandler} addBook={this.addBook} />
            )} />


         </div>



      )
   }
}

export default BooksApp
