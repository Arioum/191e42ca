import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filterSlice',
  initialState: {
    roles: [],
    location: [],
    experience: '',
    remote: '',
    basePay: '',
  },
  reducers: {
    updateRoles: (state, action) => {
      if (state.roles.length !== 0) {
        const res = state.roles.find((role) => role === action.payload);

        if (!res) {
          state.roles.push(action.payload);
        }
      } else {
        state.roles.push(action.payload);
      }
    },
    updateLocation: (state, action) => {
      if (state.location.length !== 0) {
        const res = state.location.find((location) => location === action.payload);

        if (!res) {
          state.location.push(action.payload);
        }
      } else {
        state.location.push(action.payload);
      }
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
