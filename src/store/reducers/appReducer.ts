// Import ReduxToolkit
import {createSlice} from '@reduxjs/toolkit';

// Initial State
interface IInitalState {
    
}

const initialState: IInitalState = {
  
};


export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
  },
});

export default appSlice.reducer;
