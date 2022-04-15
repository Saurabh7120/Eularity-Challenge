import { configureStore } from "@reduxjs/toolkit";
import petReducer from "./reducers/petReducer";

const store = configureStore({
    reducer: petReducer
})

export default store;