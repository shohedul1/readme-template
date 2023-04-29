import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../fetaures bookls/BooksSlice";

const store = configureStore({
    reducer:{
        booksReducer: booksReducer,
    },
});

export default store;

