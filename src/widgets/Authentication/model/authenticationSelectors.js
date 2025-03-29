export const selectAuthState = (state) => state.authentication;
export const selectIsRegProcess = (state) => selectAuthState(state).isRegistrationProcess;