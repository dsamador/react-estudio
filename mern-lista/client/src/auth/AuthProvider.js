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
    const [user, setUser] = useState(null);

    const login = ()=> setUser({id: 1, roles: roles.regular})
    const logout = ()=> setUser(null)

    /* comprobar que el usuario exista, si existe retorna true, sino false */
    /* con la doble negación convertimos un valor a tipo boolean */
    const isLogged = () => !!user;

    const hasRole = (role) => user?.role === role

    const contextValue = {
        user,
        isLogged,
        hasRole,
        login,
        logout

    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}
