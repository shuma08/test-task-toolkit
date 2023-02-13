import { fetchPostById } from "./ActionCreators";
import { Action, AnyAction, createSlice } from "@reduxjs/toolkit";
import { IPost } from "../models/IPost";

interface PostState {
    posts: IPost[],
    isLoading: boolean,
    error: string,
}

const initialState: PostState = {
    posts: [],
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

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchPostById.pending, (state) => {
            state.isLoading = true
        })
            .addCase(fetchPostById.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = ""
                state.posts = action.payload
            })
            .addMatcher(isRejectedAction, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export default postSlice.reducer;