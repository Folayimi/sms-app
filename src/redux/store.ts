// store.ts or rootReducer.ts
import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./features/register/registerSlice"; // adjust path as needed

export const store = configureStore({
  reducer: {
    register: registerReducer,
  },
});

// Export RootState type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
