import { configureStore } from '@reduxjs/toolkit'
import MovieSlice from "./appState";


const store = configureStore({
    reducer: {
        searchString: MovieSlice,
    },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store