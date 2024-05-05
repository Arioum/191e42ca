import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filters';

export default configureStore({
  reducer: { filters: filterSlice },
});
