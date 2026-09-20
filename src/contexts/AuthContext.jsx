/**
 * src/contexts/AuthContext.jsx
 * Authentication context for managing user login state and roles
 */
import { createContext, useState } from "react";
// Create the authentication context
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
// Authentication context for managing user login state and roles
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  // State and functions for managing authentication
  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);
  const hasRole = (role) => user?.role === role;
  // Provide the authentication context to child components
  return (
    <AuthContext.Provider value={{ user, login, logout, hasRole }}>
      {children}
    </AuthContext.Provider>
  );
}