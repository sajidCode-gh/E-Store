import { createSlice } from "@reduxjs/toolkit";
// import { USER_ACTION_TYPES } from "./user.types";

const initialState = {
    currentUser: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setCurrentUser(state, action) {
            state.currentUser = action.payload;
        },
    },
});

export const { setCurrentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;

// export const userReducer = (state = initialState, action) => {
//     const { type, payload } = action;

//     switch (type) {
//         case USER_ACTION_TYPES.currentUser:
//             return {
//                 ...state,
//                 currentUser: payload,
//             };
//         default:
//             return state;
//     }
// };
