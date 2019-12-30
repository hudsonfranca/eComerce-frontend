export function loginCustomerSuccess(token) {
  localStorage.setItem("authorization", token);

  return {
    type: "LOGIN_CUSTOMER_SUCCESS",
    payload: {
      token
    }
  };
}

export function createAccountSuccess(token, customerName) {
  localStorage.setItem("authorization", token);

  return {
    type: "CREATE_ACCOUNT_SUCCESS",
    payload: {
      token,
      customerName
    }
  };
}

export function loginCustomerFailure(error) {
  localStorage.removeItem("authorization");

  return {
    type: "LOGIN_CUSTOMER_FAILURE",
    payload: {
      status: error.response.status,
      statusText: error.response.statusText
    }
  };
}

export function createAccountFailure(error) {
  localStorage.removeItem("authorization");

  return {
    type: "CREATE_ACCOUNT_FAILURE",
    payload: {
      status: error.response.status,
      statusText: error.response.statusText
    }
  };
}

export function logout() {
  localStorage.removeItem("authorization");
  return {
    type: "LOGOUT_CUSTOMER"
  };
}

export function loginCustomerRequest() {
  return {
    type: "LOGIN_CUSTOMER_REQUEST"
  };
}

export function createAccountRequest() {
  return {
    type: "CREATE_ACCOUNT_REQUEST"
  };
}

// export function logoutAndRedirect() {
//   return (dispatch, state) => {
//       dispatch(logout());
//       dispatch(pushState(null, '/login'));
//   }
// }
