import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  description: '',
};

const addTaskFormSlice = createSlice({
  name: 'addTaskForm',
  initialState,
  reducers: {
    setTitle(state, action) {
      state.title = action.payload;
    },
    setDescription(state, action) {
      state.description = action.payload;
    },
    resetForm(state) {
      state.title = '';
      state.description = '';
    }
  }
});

export const { setTitle, setDescription, resetForm } = addTaskFormSlice.actions;
export default addTaskFormSlice.reducer;
