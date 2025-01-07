import {useState} from "react";
import {LoginRequest} from "../models/User";
import {API_URL} from "../constants/urls";
import client from "../constants/appollo-client";


export const useLogin = () => {
    const [error, setError] = useState<boolean>();
    const login = async (request: LoginRequest) => {
        const res = await fetch(`${API_URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(request)
            }
        )
        if (!res.ok) {
            setError(true);
            return;
        }
        setError(false);
        await client.refetchQueries({ include: 'active'});
    };
    return {login, error};
}