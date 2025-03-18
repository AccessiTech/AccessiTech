import { createSlice, Slice, SliceCaseReducers } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const countSliceName = "count";

export const initialState = 0;
export type CountState = typeof initialState;

export const INCREMENT = "count/increment";
export const RESET = "count/reset";

export const countSlice: Slice<any, SliceCaseReducers<any>, string> = createSlice({
  name: countSliceName,
  initialState,
  reducers: {
    [INCREMENT]: (state: any) => {
      return state + 1;
    },
    [RESET]: () => {
      return initialState;
    },
  },
});

export const increment = countSlice.actions[INCREMENT];
export const reset = countSlice.actions[RESET];

export const useCount = () => {
  return useSelector((state:any) => state[countSliceName]);
}

export const getCount = (state:any) => {
  return state[countSliceName];
};