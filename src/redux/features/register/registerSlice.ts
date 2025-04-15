
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// import { fetchFromLS } from "@/services/request";

// const fetchFromLS = (user) => {
//   try {
//     const data = localStorage.getItem(user);
//     if (data !== null) {
//       return JSON.parse(data);
//     }
//   } catch (error) {
//     console.error("Error fetching data from localStorage:", error);
//   }
//   return "";
// };

interface RegisterState {
  topUp: boolean;
  hidden: boolean;
  showNav: boolean;
}

const initialState: RegisterState = {
  topUp: false,
  hidden: true,
  showNav: false,
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setTopUp: (state, action: PayloadAction<boolean>) => {
      state.topUp = action.payload;
    },
    setHidden: (state, action: PayloadAction<boolean>) => {
      state.hidden = action.payload;
    },
    setShowNav: (state, action: PayloadAction<boolean>) => {
      state.showNav = action.payload;
    },
  },
});

export const { setHidden, setTopUp, setShowNav } = registerSlice.actions;

export default registerSlice.reducer;
