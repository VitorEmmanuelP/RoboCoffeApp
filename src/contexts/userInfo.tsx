import React, { createContext, useState } from "react";

export const UserInfoContext = createContext({});

export const UserInfoProvider = ({ children }) => {
  const [userDados, setUserDados] = useState();

  const saveUserDados = (dados) => {
    setUserDados(dados);
  };

  return (
    <UserInfoContext.Provider value={{ nome: "vir", saveUserDados, userDados }}>
      {children}
    </UserInfoContext.Provider>
  );
};
