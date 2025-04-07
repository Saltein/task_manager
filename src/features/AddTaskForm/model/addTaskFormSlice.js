import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  description: '',
  priority: 4,
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
    setPriority(state, action) {
      state.priority = action.payload;
    },
    resetForm(state) {
      state.title = '';
      state.description = '';
    }
  }
});

export const { setTitle, setDescription, resetForm } = addTaskFormSlice.actions;
export default addTaskFormSlice.reducer;
export const selectTitle = (state) => state.addTaskForm.title;
export const selectDescription = (state) => state.addTaskForm.description;
export const selectPriority = (state) => state.addTaskForm.priority;
