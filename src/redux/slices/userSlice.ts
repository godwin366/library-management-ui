import { createSlice } from '@reduxjs/toolkit';
export interface IUser {
  token: string;
  email: string;
  userName: string;
}

const initialState: IUser = {
  token: "",
  email: "",
  userName: ""
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      return { ...state, email: action.payload };
    },
    setToken: (state, action) => {
      return { ...state, token: action.payload };
    },
    setUser: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setToken, setEmail, setUser } = userSlice.actions;

export default userSlice.reducer;
