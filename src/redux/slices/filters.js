import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filterSlice',
  initialState: {
    roles: [],
    location: [],
    experience: [],
    remote: [],
    basePay: [],
    companyName: '',
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
        const res = state.location.find(
          (location) => location === action.payload
        );

        if (!res) {
          state.location.push(action.payload);
        }
      } else {
        state.location.push(action.payload);
      }
    },
    updateExperience: (state, action) => {
      if (state.experience.length !== 0) {
        const res = state.experience.find(
          (experience) => experience === action.payload
        );

        if (!res) {
          state.experience.push(action.payload);
        }
      } else {
        state.experience.push(action.payload);
      }
    },
    updateRemote: (state, action) => {
      if (state.remote.length !== 0) {
        const res = state.remote.find((remote) => remote === action.payload);

        if (!res) {
          state.remote.push(action.payload);
        }
      } else {
        state.remote.push(action.payload);
      }
    },
    updateBasePay: (state, action) => {
      state.basePay = action.payload;
    },
    updateCompanyName: (state, action) => {
      state.companyName = action.payload;
    },
  },
});

export const {
  updateRoles,
  updateLocation,
  updateExperience,
  updateRemote,
  updateBasePay,
  updateCompanyName,
} = filterSlice.actions;
export default filterSlice.reducer;
