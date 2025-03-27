export const selectAuthState = (state) => state.auth;
export const selectIsRegProcess = (state) => selectAuthState(state).isRegistrationProcess;