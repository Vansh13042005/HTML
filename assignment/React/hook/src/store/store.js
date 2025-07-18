import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  value: 0
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, value: state.value + 1 };
    case 'DECREMENT':
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
}

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});