import { CATEGORY_TYPES } from "./category.types";

const INITIAL_STATE = {
    categoriesArrays: [],
};

export const categoriesReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case CATEGORY_TYPES.setCategory:
            return {
                ...state,
                categoriesArrays: payload,
            };

        default:
            return state;
    }
};
