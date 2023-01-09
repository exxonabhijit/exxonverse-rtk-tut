import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUSES = Object.freeze({
  IDEL: "idel",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    posts: [],
    status: STATUSES.IDEL,
    status1: STATUSES.IDEL,
  },

  //1.reducer when you use normal method
  reducers: {
    // setProducts(state, action) {
    //   //You can't do this
    //   //const res  await fetch('https://fakestoreapo.com'); for this you need to use RTK query and Thunk (inbuild asto install karayachi garaj ny).
    //   state.data = action.payload;
    // },
    // setPosts(state, action) {
    //   state.posts = action.payload;
    // },
    // setStatus(state, action) {
    //   state.status = action.payload;
    // },
  },

  //2. when you used createAsynchThunk method
  extraReducers: (builder) => {
    //fetching products
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDEL;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });

    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status1 = STATUSES.LOADING;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.status1 = STATUSES.IDEL;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status1 = STATUSES.ERROR;
      });
  },
});

//hunks (thunk function return a function) :- Old Method ajun on use karu skots
// export function fetchProducts() {
//   return async function fetchProductsThunk(dispatch, getState) {
//     dispatch(setStatus(STATUSES.LOADING));
//     try {
//       const res = await axios.get("https://fakestoreapi.com/products");
//       console.log("Thunk product data", res.data);
//       const data = res.data;
//       dispatch(setProducts(data));
//       dispatch(setStatus(STATUSES.IDEL));
//     } catch (error) {
//       console.log(error);
//       dispatch(setStatus(STATUSES.ERROR));
//     }
//   };
// }

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  console.log("res data products :::", res.data);
  const data = res.data;
  return data;
});

export const fetchPosts = createAsyncThunk("posts/fetch", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  console.log("res data post :::", res.data);
  const data = res.data;
  return data;
});

export const { setProducts, setStatus, setPosts } = productSlice.actions;
export default productSlice.reducer;
