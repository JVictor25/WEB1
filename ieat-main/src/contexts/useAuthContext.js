import { createContext, useContext, useState } from "react";

const key = "ieat@user";

const USER_DEFAULT_VALUES = {
  id: undefined,
  email: undefined,
  name: undefined,
  type: undefined,
  boughtCourses: undefined,
};

const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem(key)) ?? USER_DEFAULT_VALUES
  );

  function login(id, email, name, type, boughtCourses) {
    const user = { id, email, name, type, boughtCourses };
    setUser(user);
    sessionStorage.setItem(key, JSON.stringify(user));
  }

  function logout() {
    setUser(USER_DEFAULT_VALUES);
    sessionStorage.removeItem(key);
  }

  function addBoughtCourses(boughtCourses) {
    const newUser = {
      ...user,
      boughtCourses: [...user.boughtCourses, ...boughtCourses],
    };
    setUser(newUser);
    sessionStorage.setItem(key, JSON.stringify(newUser));
  }

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isLoggedIn: !!user.id, addBoughtCourses }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
