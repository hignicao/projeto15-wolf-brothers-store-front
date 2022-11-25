import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(
    localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData"))
      : undefined
  );
  const [showResult, setShowResult] = useState(false);
  return (
    <UserContext.Provider value={{ userData, setUserData, showResult, setShowResult}}>
      {children}
    </UserContext.Provider>
  );
};
