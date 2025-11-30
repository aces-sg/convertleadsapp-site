import React, { createContext, useState, useEffect } from "react";
import * as auth from "./auth";
import { getUserName, useUserName } from "../../hooks/auth";

interface AuthContextType {
  user: any;
  sub: String;
  signIn: (username: string, password: string) => void;
  isLoading: boolean;
  signOut: () => void;
}

interface Result {
  success: boolean;
  message: string;
}

const AuthContext = createContext({} as AuthContextType);

function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getCurrentUser = async () => {
    try {
      const user = await auth.getCurrentUser();
      setUser(user);
    } catch (err) {
      // not logged in
      console.log(err);
      setUser({});
    }
  };

  const signIn = async (username: string, password: string) => {
    // debugger
    await auth.signIn(username, password);
    await getCurrentUser();
  };

  const signOut = async () => {
    await auth.signOut();
    setUser({});
  };

  const authValue = {
    user,
    isLoading,
    signIn,
    signOut,
    sub: user?.sub,
  };

  useEffect(() => {
    getCurrentUser()
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, []);

  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
