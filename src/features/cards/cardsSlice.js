import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: {}
};

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.cards[action.payload.id] = action.payload;
    }
  }
});

//write a selector that returns a card with the given id.
export const selectCards = (state) => state.cards.cards;
export const selectCardById = (state, cardId) => state.cards.cards[cardId];

export const { addCard } = cardSlice.actions;
export default cardSlice.reducer;