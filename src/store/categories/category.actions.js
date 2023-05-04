import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORY_TYPES } from "./category.types";

export const setCategoriesArrays = (categoriesArrays) =>
    createAction(CATEGORY_TYPES.setCategory, categoriesArrays);
