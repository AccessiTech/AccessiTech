import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export const disclosureSliceName = 'disclosure';

export interface Disclosure {
  loaded: boolean;
  id: string;
  title: string;
  content: string;
}

export interface DisclosureState {
  isLoading: boolean;
  entries: { [id: string]: Disclosure };
}

const initialState: DisclosureState = {
  isLoading: false,
  entries: {},
};

export const disclosureSlice = createSlice({
  name: disclosureSliceName,
  initialState,
  reducers: {
    setDisclosureEntry: (state, action) => {
      const { id, title, content } = action.payload;
      state.entries[id] = {
        loaded: true,
        id,
        title,
        content,
      };
    },
  },
});

export const { setDisclosureEntry } = disclosureSlice.actions;

export const useDisclosure = (id: string) => {
  return useSelector(
    (state: any) => state[disclosureSliceName]?.entries?.[id] || { loaded: false }
  );
};

export default disclosureSlice.reducer;
