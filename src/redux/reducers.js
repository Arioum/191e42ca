import { createSlice } from '@reduxjs/toolkit';

const rolesSlice = createSlice({
  name: 'roles',
  initialState: {
    roles: '', // Initial state for roles
  },
  reducers: {
    updateRoles: (state, action) => {
      state.roles = action.payload;
    },
  },
});

export const { updateRoles } = rolesSlice.actions;
export default rolesSlice.reducer;
