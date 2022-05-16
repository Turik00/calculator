import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CalculatorState {
  accumulatedSum: number;
  display: string;
}

const initialState: CalculatorState = {
  accumulatedSum: 0,
  display: '0',
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    calcAction: (state, action: PayloadAction<string>) => {
      performCalculatorAction(state, action);
    },
  },
});

const performCalculatorAction = (state: CalculatorState, action: PayloadAction<string>) => {
  switch (action.payload) {
    case '=':
      state.accumulatedSum = 0;
      state.display = '0';
      break;
    case 'AC':
      state.accumulatedSum = 0;
      state.display = '0';
      break;
    case '%':
      state.accumulatedSum = 0;
      state.display = '0';
      break;
    default:
      state.display += action.payload;
  }
};

// Action creators are generated for each case reducer function
export const { calcAction } = calculatorSlice.actions;

export default calculatorSlice.reducer;
