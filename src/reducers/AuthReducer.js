const initialState = {
  token: null,
  customerName: null,
  isAuthenticated: false,
  isAuthenticating: false,
  statusText: null
};

export const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOGIN_USER_REQUEST":
      return {
        ...state,
        isAuthenticating: true,
        statusText: null
      };
    case "LOGIN_USER_SUCCESS":
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: true,
        token: payload.token,
        userName: payload.name,
        statusText: "You have been successfully logged in."
      };
    case "LOGIN_USER_FAILURE":
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: false,
        token: null,
        userName: null,
        statusText: `Authentication Error: ${payload.status} ${payload.statusText}`
      };
    case "LOGOUT_USER":
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        userName: null,
        statusText: "You have been successfully logged out."
      };
    default:
      return state;
  }
};
