import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        profile: (() => {
            try {
                return JSON.parse(localStorage.getItem("profile")) || null;
            } catch (error) {
                return null;
            }
        })(),
    },
    reducers: {
        setProfile: (state, action) => {
            state.profile = action.payload;
            if (action.payload) {
                localStorage.setItem("profile", JSON.stringify(action.payload));
            } else {
                localStorage.removeItem("profile");
            }
        },
        clearProfile: (state) => {
            state.profile = null;
            localStorage.removeItem("profile");
        },
    },
});

export const { setProfile, clearProfile } = userSlice.actions;
export const selectUserProfile = (state) => state.user.profile;
export default userSlice.reducer;
