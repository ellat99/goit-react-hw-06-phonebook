import { createSlice } from '@reduxjs/toolkit';
import { initialData } from '../data';

const ContactSlice = createSlice({
  name: 'contacts', //nume slice -ului
  initialState: initialData, //starea initiala a slice ului,care e o lista de contacte initiale
  reducers: {
    //reducerii si actiunile asociate
    addContact: {
      //adaugarea unui contact
      reducer(state, action) {
        state.push(action.payload); //adauga noul contact la array ul state ului
      },
    },

    deleteContact(state, action) {
      //actiunea pt stergere unui contact
      const i = state.findIndex(contact => contact.id === action.payload); //gaseste indexul contactului de sters
      state.splice(i, 1); //sterge contactul din array ul state ului
    },
    updateFilter(state, action) {
      //actiunea pentru actualizarea filtrului
      state.filter = action.payload; //actuliz val filtrului in starea slice ului
    },
  },
});

export const contactsReducer = ContactSlice.reducer;
export const { deleteContact, addContact, updateFilter } = ContactSlice.actions;
