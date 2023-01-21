const initialState = {
  adminAccounts: [
    { login: "admin1", password: "password1" },
    { login: "admin2", password: "password2" },
    { login: "admin3", password: "password3" },
  ],
  isLoggedIn: false,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      const { login, password } = action.payload;
      const isValid = state.adminAccounts.some(
        (account) => account.login === login && account.password === password
      );
      return { ...state, isLoggedIn: isValid };

    case "ADD_ACCOUNT":
      const { newLogin, newPassword } = action.payload;
      return {
        ...state,
        adminAccounts: [
          ...state.adminAccounts,
          { login: newLogin, password: newPassword },
        ],
      };

    case "DELETE_ACCOUNT":
      const { loginToDelete } = action.payload;
      if (state.adminAccounts.length === 1) {
        console.log("Cannot delete the last account.");
        return state;
      } else {
        return {
          ...state,
          adminAccounts: state.adminAccounts.filter(
            (account) => account.login !== loginToDelete
          ),
        };
      }

    case "GET_ALL_ACCOUNTS":
      return { ...state, allAccounts: [...state.adminAccounts] };

    default:
      return state;
  }
};

export default adminReducer;
