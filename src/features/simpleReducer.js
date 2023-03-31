import { createSlice } from "@reduxjs/toolkit";

import get from "lodash/get";

export const slice = createSlice({
  name: "simpleReducer",
  initialState: { isRemoved: true, data: [] },
  reducers: {
    addHintMsg: (state, action) => {
      const hintSet = new Set(state.data);
      hintSet.add(action.payload);

      console.log("test");
      return {
        ...state,
        data: Array.from(hintSet),
        isRemoved: false
      };
    },
    removeHintMsg: (state, action) => {
      let newStateData = [...state.data];
      const key = get(action, "payload.key");
      if (key) {
        newStateData = newStateData.filter((hint) => hint.key !== key);
        if (newStateData.length === state.data.length) {
          newStateData = state.data;
        }
      } else {
        newStateData.pop();
      }

      return {
        ...state,
        data: newStateData,
        isRemoved: !newStateData || newStateData.length === 0
      };
    }
  }
});

const { actions } = slice;

export { actions };

export default slice.reducer;
