import { useContext, createContext, useState } from "react";
import userServices, { getUser, logInUser } from "../services/useServices";

const authContext = createContext(null);

authContext.displayName = "auth-context";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getUser());

  const refreshUser = () => setUser(getUser());

  const logIn = async (credentials) => {
    const response = await userServices.logInUser(credentials);
    refreshUser();

    return response;
  };

  const logOut = () => {
    userServices.logOut();
    refreshUser();
  };

  return (
    <>
      <authContext.Provider
        value={{ logIn, logOut, user, createUser: userServices.signUp }}
      >
        {children}
      </authContext.Provider>
    </>
  );
};

export const useAuth = () => {
  return useContext(authContext);
};
