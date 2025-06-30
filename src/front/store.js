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
      const { message, token, isLoginSuccessful, loggedIn } = action.payload;
      return {
        ...store,
        message: message,
        token: token,
        isLoginSuccessful: isLoginSuccessful,
        loggedIn: loggedIn,
      };
    }

    case "loggedOut": {
      const { message, token, isLoginSuccessful, loggedIn } = action.payload;
      sessionStorage.removeItem("token");
      return {
        ...initialStore(),
        message: message,
      };
    }

    case "successfulSignUp": {
      const { message, isSignUpSuccessful } = action.payload;
      return {
        ...store,
        message: message,
        isSignUpSuccessful: isSignUpSuccessful,
      };
    }

    case "successfulSignOut": {
      sessionStorage.removeItem("token");
      return {
        ...store,
        message: action.payload.message,
        token: null,
        isLoginSuccessful: false,
        loggedIn: false,
        isSignUpSuccessful: false,
      };
    }
    default:
      throw Error("Unknown action.");
  }
}
