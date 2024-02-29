import { createSlice } from '@reduxjs/toolkit';
//Această funcție este folosită pentru a crea un slice al stării. Ea primește un obiect cu câteva chei pentru a configura
// slice-ul.
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    // un reducer care primește starea curentă și o acțiune
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
