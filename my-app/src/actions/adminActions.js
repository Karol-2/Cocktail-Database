export const login = (login, password) => ({
  type: "LOGIN",
  payload: { login, password },
});

export const addAccount = (newLogin, newPassword) => ({
  type: "ADD_ACCOUNT",
  payload: { newLogin, newPassword },
});

export const deleteAccount = (loginToDelete) => ({
  type: "DELETE_ACCOUNT",
  payload: { loginToDelete },
});

export const getAllAccounts = () => ({
  type: "GET_ALL_ACCOUNTS",
});
