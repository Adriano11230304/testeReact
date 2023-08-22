import { createContext, useEffect, useState } from "react";
import apiNova from "../services/apiNova"

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [ user, SetUser ] = useState();

    useEffect(() => {
        const token = localStorage.getItem("token");
        console.log(token);
    }, [])


    const signin = async (email, password) => {
        const res = await apiNova.post('/users/userAuth', {
            "email": email,
            "password": password
        })

        console.log(res);

        return "Autenticação!";
    };


    return <AuthContext.Provider>{ children }</AuthContext.Provider>;
}