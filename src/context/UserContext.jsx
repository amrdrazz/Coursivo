import { createContext, useEffect, useState } from "react";


export const UserContext = createContext();

export default function UserProvider({ children }){
    const [loggedIn, setLoggedIn] = useState(false);

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try{
                const res = await fetch('https://coursivo-back-end.vercel.app/auth-me', { credentials: 'include' });
                const data = await res.json();
                if (res.ok){
                    setUser(data.user)
                }
            }catch(err){
                console.log(err)
            }finally{
                setLoading(false)
            }
        };
        fetchUser();
    },[loggedIn]);

    return (
        <UserContext.Provider
        value={{
            user,
            setUser,
            loading,
            loggedIn,
            setLoggedIn
        }}>
            {children}
        </UserContext.Provider>
    )
}