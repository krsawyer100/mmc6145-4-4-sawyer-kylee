// TODO: import actions and implement reducer for each action

import {
  ADD_BOOK,
  REMOVE_BOOK,
  SEARCH_BOOKS
} from './actions'
export default function reducer(prevState, {action, payload}) {
  switch(action) {
    case ADD_BOOK:
      const addToFavorites = [...prevState.favoriteBooks, payload]
      saveToLocalStorage(addToFavorites)
      return {...prevState, favoriteBooks: addToFavorites}
    case REMOVE_BOOK:
     const removeFromFavorites = prevState.favoriteBooks.filter(book => book.id !== payload)
      saveToLocalStorage(removeFromFavorites)
      return {...prevState, favoriteBooks: removeFromFavorites}
    case SEARCH_BOOKS:
        return {...prevState, bookSearchResults: payload}
    default:
      return prevState
  }
}

// This helper function stores the favoriteBook state in localStorage as a string
function saveToLocalStorage(favBooks) {
  localStorage.setItem('favoriteBooks', JSON.stringify(favBooks))
}