import { createContext } from "react";
import { useState, ReactNode } from "react";

type authProviderProps = {
    children : ReactNode;
}

type authContextData = {
    login : boolean;
    setLogin:(value: boolean)=> void;
}
export const AuthContext = createContext({} as authContextData);

export function AuthProvider({children} : authProviderProps){
    const [login, setLogin] = useState(false);
    const [name, setName] = useState(false);
    
    return(
    <AuthContext.Provider value={{login, setLogin, name, setName}}>
        {children}
    </AuthContext.Provider>)
    
}