import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState();

    const isLoggedin = !!token;

    const storeTokenInLs = (serverToken) => {
        localStorage.setItem("token", serverToken);
        setToken(serverToken);
    };

    const LogoutUser = () => {
        setToken("");
        localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider value={{ user, isLoggedin, storeTokenInLs, token , LogoutUser }}>
          {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return authContextValue;
};
