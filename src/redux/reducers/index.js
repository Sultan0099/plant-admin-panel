import { combineReducers } from "redux";

import categoryReducer from "./categoryReducer";
import authReducer from "./authReducer";
import productsReducer from "./products";


const rootReducer = combineReducers({
    categories: categoryReducer,
    auth: authReducer,
    products: productsReducer
});

export default rootReducer;