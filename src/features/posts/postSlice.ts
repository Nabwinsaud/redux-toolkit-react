import { IPostType } from "./../../types/postTypes";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { RootState, AppDispatch } from "../../app/store/store";
import axios from "axios";
import getLimitedPosts from "../../services/postServices";

export const getPosts = createAsyncThunk(
  "posts/getall",
  async (post, thunkApi) => {
    try {
      //   const response = await axios.get<IPostType[]>(
      //     "https://jsonplaceholder.typicode.com/posts?_limit=10"
      //   );
      //   return response.data;
      return getLimitedPosts();
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);
interface IPostState {
  isLoading: boolean;
  errror: string | null;
  data: [] | null;
}
const initialState = {
  isLoading: false,
  errror: "",
  data: [],
} as IPostState;

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.data = action.payload;
      })

      .addCase(getPosts.rejected, (state) => {
        state.errror = "something went wrong!";
      });
  },
});

export default postSlice.reducer;
