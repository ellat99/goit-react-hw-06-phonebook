import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './ContactSlide';
import { filterReducer } from './FilterSlice';
export const reduce = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
//
//Acest fragment de cod combină reducerii contactsReducer și filterReducer folosind funcția
// combineReducers din Redux Toolkit.
