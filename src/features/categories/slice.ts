import { createSlice } from '@reduxjs/toolkit';
import { Category, CategoriesListItem } from '@features/categories/types';
import {
  getCategoriesAction,
  getCategoryAction,
  refreshCategoriesAction,
  refreshCategoryAction,
  setCategoriesPagingAction,
  setCategoriesSortAction,
} from '@features/categories/actions';
import { logoutAction } from '@features/auth/actions';
import { Paging, Sort } from '@api/types';

interface State {
  isLoading: boolean;
  isRefreshing: boolean;
  categories: CategoriesListItem[];
  sort: Sort;
  paging: Paging;
  category: Category | null;
  count: number;
}

const initialState: State = {
  isLoading: false,
  isRefreshing: false,
  categories: [],
  sort: { orderBy: 'created', sortDirection: 'desc' },
  paging: { limit: 20, offset: 0 },
  category: null,
  count: 0,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategoriesAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCategoryAction.pending, (state) => {
      state.isLoading = true;
      state.category = null;
    });
    builder.addCase(refreshCategoriesAction.pending, (state) => {
      state.isRefreshing = true;
    });
    builder.addCase(refreshCategoryAction.pending, (state) => {
      state.isRefreshing = true;
    });
    builder.addCase(refreshCategoriesAction.fulfilled, (state, action) => {
      state.isRefreshing = false;
      state.categories = action.payload.result;
      state.count = action.payload.count;
    });
    builder.addCase(refreshCategoryAction.fulfilled, (state, action) => {
      state.isRefreshing = false;
      state.category = action.payload.result;
    });
    builder.addCase(getCategoriesAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categories = state.categories.concat(action.payload.result);
      state.count = action.payload.count;
    });
    builder.addCase(getCategoryAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.category = action.payload.result;
    });
    builder.addCase(refreshCategoriesAction.rejected, (state) => {
      state.isLoading = false;
      state.categories = [];
      state.count = 0;
    });
    builder.addCase(refreshCategoryAction.rejected, (state) => {
      state.isLoading = false;
      state.category = null;
    });
    builder.addCase(getCategoriesAction.rejected, (state) => {
      state.isLoading = false;
      state.categories = [];
      state.count = 0;
    });
    builder.addCase(getCategoryAction.rejected, (state) => {
      state.isLoading = false;
      state.category = null;
    });
    builder.addCase(setCategoriesSortAction, (state, action) => {
      state.sort = action.payload.sort;
    });
    builder.addCase(setCategoriesPagingAction, (state, action) => {
      state.paging = action.payload.paging;
    });
    builder.addCase(logoutAction, () => initialState);
  },
});

export const { reducer } = categoriesSlice;
