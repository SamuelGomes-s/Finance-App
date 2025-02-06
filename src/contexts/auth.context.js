import { createContext, useState } from "react"
import { api } from "../services/api/apiBackend";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    async function handleSignIn(email, password) {
        try {
            setLoading(true);
            const response = await api.post('/login', {
                email: email,
                password: password
            })
            console.log(response.data)
        } catch (error) {
            console.log(error.message)
        } finally {
            setLoading(false);
        }
    }

    async function handleSignUp(name, email, password) {
        try {
            setLoading(true);
            const response = await api.post('/users', {
                name: name,
                password: password,
                email: email
            })
            navigation.goBack();
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <AuthContext.Provider
            value={{
                handleSignIn,
                handleSignUp,
                loading
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

