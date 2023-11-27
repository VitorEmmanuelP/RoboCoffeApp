import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { type RootState } from "../store";

import { UserProps, type AppState } from "./types";

const initialState = {
  loading: false,
  search: "",
  profileUrl: "",
  filter: false,
  userDados: {},
} as AppState;

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
    setUserDados: (state, { payload }: PayloadAction<UserProps>) => {
      state.userDados = payload;
    },
    setProfileUrl: (state, { payload }: PayloadAction<string>) => {
      state.profileUrl = payload;
    },
    setSearch: (state, { payload }: PayloadAction<string>) => {
      state.search = payload;
    },
    setFilter: (state, { payload }: PayloadAction<boolean>) => {
      state.filter = payload;
    },
  },
});

export const { setSearch, setFilter, setProfileUrl, setUserDados } =
  appSlice.actions;

// SELECTORS PARA SIMPLIFICAR OS USESELECTORS NA APLICAÇÃO
export const selectSearch = ({ app: { search } }: RootState): string => {
  return search;
};
export const selectUserDados = ({
  app: { userDados },
}: RootState): UserProps => {
  return userDados;
};
export const selectProfileUrl = ({
  app: { profileUrl },
}: RootState): string => {
  return profileUrl;
};
export const selectFilter = ({ app: { filter } }: RootState): boolean => {
  return filter;
};
export const selectLoading = ({ app: { loading } }: RootState): boolean => {
  return loading;
};

export default appSlice.reducer;
