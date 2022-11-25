import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
	const [userData, setUserData] = useState(localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")) : undefined);

	return <UserContext.Provider value={{ userData, setUserData }}>{children}</UserContext.Provider>;
};
