import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
import UsersReducer from './reducer_users';
import ActiveUser from './reducer_active_user';
import ActiveCombined from './reducer_combined';

const rootReducer = combineReducers({
 // state: (state = {}) => state
  books: BooksReducer,
  activeBook: ActiveBook,
  users: UsersReducer,
    activeUser: ActiveUser,
    combined: ActiveCombined
});

export default rootReducer;

