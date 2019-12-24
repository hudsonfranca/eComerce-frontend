export function loginUserSuccess(token) {
  localStorage.setItem("authorization", token);

  return {
    type: "LOGIN_USER_SUCCESS",
    payload: {
      token
    }
  };
}

export function loginUserFailure(error) {
  localStorage.removeItem("authorization");

  return {
    type: "LOGIN_USER_FAILURE",
    payload: {
      status: error.response.status,
      statusText: error.response.statusText
    }
  };
}

export function logout() {
  localStorage.removeItem("authorization");
  return {
    type: "LOGOUT_USER"
  };
}

export function loginUserRequest() {
  return {
    type: "LOGIN_USER_REQUEST"
  };
}

// export function logoutAndRedirect() {
//   return (dispatch, state) => {
//       dispatch(logout());
//       dispatch(pushState(null, '/login'));
//   }
// }
