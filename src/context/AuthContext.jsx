import React, { createContext, useState, useContext } from 'react';

// Create the context
const AuthContext = createContext();

// Create a custom hook for easy access
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null means not logged in

  const login = (userData) => {
    // In the future, this is where you'd connect to your backend/database
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};