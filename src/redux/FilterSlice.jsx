import { createSlice } from '@reduxjs/toolkit';
const filterSlice = createSlice({
  name: 'filter', //numele slice ului
  initialState: '', //starea initiala a slice ului care e un sir gol
  reducers: {
    //reducerii si actiunile asociate
    setFilter(state, action) {
      //actiunea pt setarea filtrului
      return action.payload; //returneaza valoarea filtrului nou
    },
  },
});
export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice;
//GESTIOONEAZA FILTRUL PT LISTA DE CONTACTE
