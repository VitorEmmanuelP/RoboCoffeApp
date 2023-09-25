import { createSlice } from "@reduxjs/toolkit";
import { ProfileState, ProfileEntity } from "./profile.entity";
import profileReducer from "./profile.reducer";

export const initialState: ProfileState = {
  profile: { name: "", cnpj: "", empresa: "", terreiros: 0 },
};

const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: profileReducer,
});

export const { actions, reducer } = profileSlice;
