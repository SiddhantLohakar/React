import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Components/Counter/CounterSlice"

const store  = configureStore({
    reducer:{
        counter: counterSlice
    }
})

export default store;