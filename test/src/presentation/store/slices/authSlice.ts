import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './../state/authState';
import { User } from '@/src/domain/entities/User';

const initialState:AuthState = {
  user:null,
  token:null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers:{
    login :(state, action:PayloadAction<{user:User; token:string}>)=>{
      state.user = action.payload.user;
      state.token = action.payload.token;
    },logout:(state)=>{
      state.user = null;
      state.token=null;
    }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;