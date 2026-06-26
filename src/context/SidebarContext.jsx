import { createContext, useState } from 'react'


export const SidebarContext = createContext();

export default function SidebarProvider({ children }){

    const [showSidebar, setShowSidebar] = useState(false);


    return (
        <SidebarContext.Provider
            value={{
                showSidebar,
                setShowSidebar
            }}
        >
            { children }
        </SidebarContext.Provider>
    )
}