import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import {clientApi} from '../services/api';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [clientApi.reducerPath]: clientApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(clientApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
