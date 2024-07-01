import { createSlice } from '@reduxjs/toolkit';
import { addQuiz } from '../quizzes/quizesSlice';

const initialState = {
  topics: {}
};

const topicSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {
    addTopic: (state, action) => {
      state.topics[action.payload.id] = action.payload;
      state.topics[action.payload.id].quizIds = [];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(addQuiz, (state, action) => {
      const { id, topicId } = action.payload;
      state.topics[topicId].quizIds.push(id);
    });
  } 
});

export const selectTopics = (state) => state.topics.topics;
export const { addTopic } = topicSlice.actions;
export default topicSlice.reducer;