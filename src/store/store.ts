import { combineReducers, configureStore } from "@reduxjs/toolkit"
import postReducer from "./reducers/PostSlice";
import userReducer from "./reducers/UserSlice";
import albumReducer from "./reducers/AlbumSlice"
const rootReducer = combineReducers({
    postReducer,
    userReducer,
    albumReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]