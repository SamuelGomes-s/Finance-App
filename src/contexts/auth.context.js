import { createContext, useState } from "react"
import { api } from "../services/api/apiBackend";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    async function handleSignIn(email, password) {
        try {
            setLoading(true);
            const response = await api.post('/login', {
                email: email,
                password: password
            })

            //Fornecer token para as proximas requisições
            api.defaults.headers['Authorization'] = `Bearer ${response.data?.token}`;

            setUser(
                {
                    name: response.data?.name,
                    email: email,
                    uid: response.data?.id,
                }
            );

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
                signed: !!user,
                handleSignIn,
                handleSignUp,
                loading,
                user
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

