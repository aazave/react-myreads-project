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
      BooksAPI.getAll()
         .then((books) => {
            this.setState(() => ({
               books
            }))
         })

   }

   render() {
      const { books } = this.state;

      return (
         <div className="app">

            <Route exact path='/' render={() => (
               <Bookcase books={books} />
            )}
            />

            <Route path='/search' render={() => (
               <SearchBooks />
            )} />



         </div>



      )
   }
}

export default BooksApp
