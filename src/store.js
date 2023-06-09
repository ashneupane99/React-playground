import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./displaySlice";

const store = configureStore({
    reducer: {
        data: dataReducer,
    }
})
export default store;