import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quizzes: {}
};

const quizSlice = createSlice({
  name: 'quizzes',
  initialState,
  reducers: {
    addQuiz: (state, action) => {
      state.quizzes[action.payload.id] = action.payload;
    }
  }
})

export const selectQuizes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizSlice.actions;
export default quizSlice.reducer;
    