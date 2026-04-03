"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  company: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (userData: SignupData) => Promise<boolean>;
  logout: () => void;
}

interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  password: string;
  role: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Check for existing session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("cip_user");
    const authToken = localStorage.getItem("cip_auth_token");
    
    if (storedUser && authToken) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing stored user:", error);
        localStorage.removeItem("cip_user");
        localStorage.removeItem("cip_auth_token");
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Simulate API call - Replace this with your actual authentication API
      // For demo purposes, accepting any email/password combination
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Demo users for testing
      const demoUsers: Record<string, User> = {
        "admin@cip.com": {
          id: "1",
          email: "admin@cip.com",
          firstName: "Admin",
          lastName: "User",
          company: "Chemical Industry Portal",
          role: "Administrator"
        },
        "analyst@cip.com": {
          id: "2",
          email: "analyst@cip.com",
          firstName: "Market",
          lastName: "Analyst",
          company: "ABC Chemicals",
          role: "Analyst"
        }
      };

      // Check if user exists in demo users or accept any valid email
      const authenticatedUser = demoUsers[email.toLowerCase()] || {
        id: Math.random().toString(36).substr(2, 9),
        email: email,
        firstName: email.split("@")[0].split(".")[0] || "User",
        lastName: email.split("@")[0].split(".")[1] || "Name",
        company: email.split("@")[1] || "Company",
        role: "User"
      };

      // Generate a mock auth token
      const authToken = btoa(`${email}:${Date.now()}`);

      // Store user data and token
      localStorage.setItem("cip_user", JSON.stringify(authenticatedUser));
      localStorage.setItem("cip_auth_token", authToken);
      localStorage.setItem("cip_login_time", new Date().toISOString());

      setUser(authenticatedUser);
      
      return true;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  const signup = async (userData: SignupData): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      const newUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        company: userData.company,
        role: userData.role
      };

      // Generate auth token
      const authToken = btoa(`${userData.email}:${Date.now()}`);

      // Store user data
      localStorage.setItem("cip_user", JSON.stringify(newUser));
      localStorage.setItem("cip_auth_token", authToken);
      localStorage.setItem("cip_login_time", new Date().toISOString());

      setUser(newUser);
      
      return true;
    } catch (error) {
      console.error("Signup error:", error);
      return false;
    }
  };

  const logout = () => {
    // Clear all auth data
    localStorage.removeItem("cip_user");
    localStorage.removeItem("cip_auth_token");
    localStorage.removeItem("cip_login_time");
    
    setUser(null);
    
    // Redirect to login page
    router.push("/login");
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    signup,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
