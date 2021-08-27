//Este es un componente que retorna a sus hijos
//el valor de un contexto, es decir: un valor
//global para que lo puedan consumir.
import { useState } from "react";
import { createContext } from "react";
import roles from "../helpers/roles";

//contextValue es un objeto con la información que
//queremos transmitir a los componentes hijos
export const AuthContext = createContext();




export default function AuthProvider({children}) {
    const [user, setUser] = useState({id: 1, roles: roles.regular})

    const contextValue = {
        user,
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}
