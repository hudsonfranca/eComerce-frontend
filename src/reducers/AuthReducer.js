const initialState = {
  token: null,
  customerName: null,
  isAuthenticated: false,
  isAuthenticating: false,
  statusText: null
};

export const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOGIN_CUSTOMER_REQUEST":
      return {
        ...state,
        isAuthenticating: true,
        statusText: null
      };
    case "CREATE_ACCOUNT_REQUEST":
      return {
        ...state,
        isAuthenticating: true,
        statusText: null
      };
    case "LOGIN_CUSTOMER_SUCCESS":
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: true,
        token: payload.token,
        customerName: payload.userName,
        statusText: "You have been successfully logged in."
      };
    case "CREATE_ACCOUNT_SUCCESS":
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: true,
        token: payload.token,
        customerName: payload.customerName,
        statusText: "You have been successfully logged in."
      };
    case "LOGIN_CUSTOMER_FAILURE":
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: false,
        token: null,
        userName: null,
        statusText: `Authentication Error: ${payload.status} ${payload.statusText}`
      };
    case "CREATE_ACCOUNT_FAILURE":
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: false,
        token: null,
        userName: null,
        statusText: `Authentication Error: ${payload.status} ${payload.statusText}`
      };
    case "LOGOUT_CUSTOMER":
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
