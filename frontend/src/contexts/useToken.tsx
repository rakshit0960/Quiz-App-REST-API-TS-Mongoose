import React, { createContext, useContext, useState } from "react";

interface Token {
    token: string |  null
    setToken: React.Dispatch<React.SetStateAction<string | null>>
}

const tokenContext = createContext<Token | null>(null);


const TokenProvider:React.FC<{children: React.JSX.Element | React.JSX.Element[]}> = ({children}) => {
    const [token, setToken] = useState<string | null>(null)
    return (
        <tokenContext.Provider value={{token, setToken}}>
            {children}
        </tokenContext.Provider>
    )
}

export function useToken() {
    return useContext(tokenContext);
}


export default TokenProvider
