// import { CATEGORY_TYPES } from "./category.types";

import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const INITIAL_STATE = {
    categoriesArrays: [],
};

export const categoriesSlice = createSlice({
    name: "categories",
    initialState: INITIAL_STATE,
    reducers: {
        setCategories(state, action) {
            state.categoriesArrays = action.payload;
        },
    },
});

export const { setCategories } = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;

// export const categoriesReducer = (state = INITIAL_STATE, action = {}) => {
//     const { type, payload } = action;

//     switch (type) {
//         case CATEGORY_TYPES.setCategory:
//             return {
//                 ...state,
//                 categoriesArrays: payload,
//             };

//         default:
//             return state;
//     }
// };
