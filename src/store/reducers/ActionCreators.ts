import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from '../models/IUser';

export const fetchUsers = createAsyncThunk(
    "user/fetchAllUsers",
    async (_, thunkAPI) => {
        try {
            const res = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const fetchPostById = createAsyncThunk(
    "posts/fetchByIdStatus",
    async (id:number, thunkAPI) => {
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const fetchAlbumById = createAsyncThunk(
    "album/fetchByIdStatus",
    async (id:number, thunkAPI) => {
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`)
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)