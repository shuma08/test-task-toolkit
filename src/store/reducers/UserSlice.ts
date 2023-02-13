import { fetchUsers } from "./ActionCreators";
import { Action, AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../models/IUser";

interface UserState {
    users: IUser[],
    isLoading: boolean,
    error: string,
}

const initialState: UserState = {
    users: [],
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

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true
        })
            .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
                state.isLoading = false
                state.error = ""
                state.users = action.payload
            })
            .addMatcher(isRejectedAction, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export default userSlice.reducer;