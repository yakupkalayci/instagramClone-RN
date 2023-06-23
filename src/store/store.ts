// Import Redux Toolkit
import {configureStore} from '@reduxjs/toolkit';

// Import Reducers
import appReducer from './reducers/appReducer';

export const store = configureStore({
  reducer: {
    auth: appReducer,
  }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
