import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectMemoiazedCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categoriesArrays
);

export const selectCategories = createSelector(
    [selectMemoiazedCategories],
    (categories) => {
        return categories.reduce((acc, category) => {
            const { title, items } = category;

            acc[title.toLowerCase()] = items;
            return acc;
        }, {});
    }
);
