# MyReads Project Description

This project showcases my understanding of React and ES6.

The MyReads project is bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. You also have the ability to search and add...that is categorize these books (read, currently reading, want to read) provided by the Backend server on the search page. Books that you've categorized in the search page will also show up on the main page. 

Please follow the Getting Started section to ensure the project will run without errors.

## Getting Started

How to get up and running with this project:

* install all project dependencies with `npm install`
* install react-router-dom with `npm install react-router-dom`
* start the development server with `npm start`

## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods that I perform on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in my app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md).

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
