import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filterSlice',
  initialState: {
    roles: '',
    location: '',
    experience: '',
    remote: '',
    basePay: '',
  },
  reducers: {
    updateRoles: (state, action) => {
      state.roles = action.payload;
    },
    updateLocation: (state, action) => {
      state.location = action.payload;
    },
    updateExperience: (state, action) => {
      state.experience = action.payload;
    },
    updateRemote: (state, action) => {
      state.location = action.payload;
    },
    updateBasePay: (state, action) => {
      state.basePay = action.payload;
    },
  },
});

export const {
  updateRoles,
  updateLocation,
  updateExperience,
  updateRemote,
  updateBasePay,
} = filterSlice.actions;
export default filterSlice.reducer;
