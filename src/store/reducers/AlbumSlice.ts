import { fetchAlbumById } from "./ActionCreators";
import { Action, AnyAction, createSlice } from "@reduxjs/toolkit";
import { IAlbum } from "../models/IAlbum";

interface AlbumState {
    albums: IAlbum[],
    isLoading: boolean,
    error: string,
}

const initialState: AlbumState = {
    albums: [],
    isLoading: false,
    error: '',
};
// ActionReducerMapBuilder
interface RejectedAction extends Action {
    payload: string;
    error: Error
}

function isRejectedAction(action: AnyAction): action is RejectedAction {
    return action.type.endsWith('rejected')
}

export const albumSlice = createSlice({
    name: "album",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchAlbumById.pending, (state) => {
            state.isLoading = true
        })
            .addCase(fetchAlbumById.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = ""
                state.albums = action.payload
            })
            .addMatcher(isRejectedAction, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export default albumSlice.reducer;