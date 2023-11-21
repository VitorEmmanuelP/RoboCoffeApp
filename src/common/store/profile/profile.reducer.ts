import { PayloadAction } from "@reduxjs/toolkit";
import { ProfileEntity, ProfileState } from "./profile.entity";

export default {
  load: (state: ProfileState, action: PayloadAction<ProfileEntity>) => {
    state.profile = action.payload;
  },
};
