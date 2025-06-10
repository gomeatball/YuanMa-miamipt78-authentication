export const initialStore = () => {
  return {
    message: null,
    token: null,
    isLoginSuccessful: false,
    loggedIn: false,
    isSignUpSuccessful: false,
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "fetchedToken": {
      const { message, token, isLoginSuccessful } = action.payload;
      return {
        ...store,
        message: message,
        token: token,
        isLoginSuccessful: isLoginSuccessful,
      };
    }

    case "loggedOut": {
      const { message, token, isLoginSuccessful } = action.payload;
      sessionStorage.removeItem("token");
      return {
        ...store,
        message: message,
        token: token,
        isLoginSuccessful: isLoginSuccessful,
        loggedIn: false,
      };
    }

    case "succesdfulSignUp": {
      const { message, isSignUpSuccessful } = action.payload;
      return {
        ...store,
        message: message,
        isSignUpSuccessful: isSignUpSuccessful,
      };
    }
    default:
      throw Error("Unknown action.");
  }
}
