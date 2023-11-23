import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { mapApi } from '../services/mapApi';
import { hackApi } from '../services/hackApi';


export const store = configureStore({
  reducer: {
    [mapApi.reducerPath]: mapApi.reducer,
    [hackApi.reducerPath]: hackApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([mapApi.middleware, hackApi.middleware])
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);