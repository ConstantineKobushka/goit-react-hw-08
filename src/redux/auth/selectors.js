export const selectAuthUser = state => state.auth.user;
export const selectAuthLoading = state => state.auth.loading;
export const selectAuthError = state => state.auth.error;
export const selectAuthToken = state => state.auth.token;
export const selectAuthIsRefreshing = state => state.auth.isRefreshing;
export const selectAuthIsLoggedIn = state => state.auth.isLoggedIn;
