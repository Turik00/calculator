import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { JSONStringifyFn } from '../../utils/utils';
import { RootState } from '../store';

const worker: Worker = new Worker('./workers/calculatorWorker.js');

export interface CalculatorState {
  accumulatedSum: number;
  display: string;
  isAccumulating: boolean;
}

const initialState: CalculatorState = {
  accumulatedSum: 0,
  display: '0',
  isAccumulating: false
};



export const calcAction = createAsyncThunk('calculator/calcAction', async (keyValue: string, thunkAPI) => {
  return await new Promise<CalculatorState>((resolve) => {
    // delegate heavy work to worker thread
      worker.postMessage(
        {
          state: (thunkAPI.getState() as RootState).calculator,
          key: keyValue,
          action: JSONStringifyFn(performCalculatorAction)
        });
      worker.onmessage = (e: MessageEvent) => {
        resolve(e.data);
      }
  });
});

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    calcChangeInputAction: (state: CalculatorState, action: PayloadAction<string>) =>{
      state.accumulatedSum = 0;
      state.display = action.payload;
      state.isAccumulating = true;
    }
  },
  extraReducers: (builder: any) => {
    builder.addCase(calcAction.fulfilled, (state: CalculatorState, action: PayloadAction<CalculatorState>) => {
      state.accumulatedSum = action.payload.accumulatedSum;
      state.display = action.payload.display;
      state.isAccumulating = action.payload.isAccumulating;
    });
  },
});

const performCalculatorAction = (state: CalculatorState, action: string) => {
  switch (action) {
    case '=':
      state.accumulatedSum = eval(state.display);
      state.display = `${state.accumulatedSum}`;
      break;
    case 'AC':
      state.accumulatedSum = 0;
      state.display = '0';
      state.isAccumulating = false;
      break;
    case '%':
      // state.accumulatedSum = 0;
      // state.display = '0';
      // state.isAccumulating = false;
      break;
    default:
      if ((action === '+' || action === '-' || action === '*' || action === '/') && isNaN(+state.display.slice(-1))) {
        state.display = `${state.display.slice(0, -1)}${action}`;
        return;
      }
      if (!state.isAccumulating) {
        if (action != '0') {
          state.isAccumulating = true;
        }
        state.display = action;
      }
      else {
        state.display = `${state.display}${action}`;
      }
  }
};

// Action creators are generated for each case reducer function
export const { calcChangeInputAction } = calculatorSlice.actions;

export default calculatorSlice.reducer;
