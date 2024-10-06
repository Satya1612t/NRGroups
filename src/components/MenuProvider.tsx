import React, { createContext, useContext, useState } from 'react';

type MenuContextType = {
    activeMenuItems: string;
    setActiveMenuItems: React.Dispatch<React.SetStateAction<string>>;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);


function MenuProvider({ children }: {children: React.ReactNode}) {

    const [activeMenuItems, setActiveMenuItems] = useState<string>('Dashboard');

    return (
        <MenuContext.Provider value={{ activeMenuItems, setActiveMenuItems }}>
            {children}
        </MenuContext.Provider>
    );
}

export default MenuProvider

export const useMenuContext = () => {
    const context = useContext(MenuContext);
    if (context === undefined) {
        throw new Error('useMenuContext must be used within a MenuProvider');
    }
    return context;
};