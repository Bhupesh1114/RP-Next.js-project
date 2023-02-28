import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

// Define a type for the slice state
interface PostsState{
    allPosts : [],
    loading : boolean,
    error? : boolean
  }
  
  // Define the initial state using that type
  const initialState: PostsState = {
    allPosts : [],
    loading : true,
  }

  export const getAllPosts = createAsyncThunk("getPosts", async () => {
         const response = await fetch("http://localhost:3330/posts");
         const data = await response.json();
         return data;
});

  
  export const postsSliceWithSsr = createSlice({
    name: 'postsWithSsr',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
     // The `reducers` field lets us define reducers and generate associated actions
    reducers: {},
    extraReducers : (builder) => {
      builder
      .addCase( getAllPosts.pending , (state) => {
          state.loading = true;
         })
      .addCase(getAllPosts.fulfilled, (state, action) => {
          state.loading = false;
          state.allPosts = action.payload;
      })
      .addCase(getAllPosts.rejected, (state,action) => {
          state.loading = false;
          state.error = true;
      })
    }
    
  })
  
  // export const { getPosts } = postsSliceWithSsr.actions
  
  
  export default postsSliceWithSsr.reducer