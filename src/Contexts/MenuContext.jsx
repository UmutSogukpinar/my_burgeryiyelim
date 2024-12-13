import React, { createContext, useState } from "react";

export const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const { menuList, setMenuList } = useState({
    menu1: {
      id: 1,
    },
    menu2: {
      id: 1,
    },
  });
  return <MenuContext.Provider value={menuList}>{children}</MenuContext.Provider>;
};

export default MenuProvider;
