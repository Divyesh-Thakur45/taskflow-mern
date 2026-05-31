import { createContext, useContext, useState } from "react";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <authContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
