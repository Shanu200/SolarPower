import { configureStore } from '@reduxjs/toolkit';
import uiReducer from "./features/uiSlice";
import { api } from './api';
import { setupListeners } from '@reduxjs/toolkit/query';



export default configureStore({
  reducer: {
    ui: uiReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => 
           getDefaultMiddleware().concat(api.middleware),
});

