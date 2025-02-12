import { createContext, useEffect, useState } from "react"
import { api } from "../services/api/apiBackend";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showMessage } from "react-native-flash-message";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);
    const [loadingUser, setLoadingUser] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        loadUser()
    }, [])

    async function handleSignIn(email, password) {
        try {
            setLoading(true);
            const response = await api.post('/login', {
                email: email,
                password: password
            });

            //Fornecer token para as proximas requisições
            api.defaults.headers['Authorization'] = `Bearer ${response.data?.token}`;
            let data = {
                name: response.data?.name,
                email: email,
                uid: response.data?.id,
                token: response.data?.token
            };
            localStorage(data);
            setUser(
                {
                    name: response.data?.name,
                    email: email,
                    uid: response.data?.id,
                }
            );
            showMessage({
                message: `Login realizado com sucesso!`,
                type: "success",
                backgroundColor: "#00B94A",
                color: "#FFFFFf",
            });
        } catch (error) {
            console.log(error.message)
            showMessage({
                message: `Não foi possivel realizar o login devido ao erro de ${error.message}`,
                type: "error",
                backgroundColor: "#EF463A",
                color: "#FFFFFf",
            });
        } finally {
            setLoading(false);
        }
    };

    async function handleSignUp(name, email, password) {
        try {
            setLoading(true);
            const response = await api.post('/users', {
                name: name,
                password: password,
                email: email
            })
            navigation.goBack();
            showMessage({
                message: `Cadastro realizado com sucesso!`,
                type: "success",
                backgroundColor: "#00B94A",
                color: "#FFFFFf",
            });
        } catch (error) {
            console.log(error.message);
            showMessage({
                message: `Não foi possivel realizar o login devido ao erro de ${error.message}`,
                type: "error",
                backgroundColor: "#EF463A",
                color: "#FFFFFf",
            });
        } finally {
            setLoading(false);
        }
    };

    async function loadUser() {
        await localStorage();
        setLoadingUser(false);
    };

    async function handleLogOut() {
        try {
            setLoading(true);
            await localStorage(null, true);
            showMessage({
                message: `Deslogado com sucesso.`,
                type: "warning",
                backgroundColor: "#EF4",
                color: "#000",
            });
        } catch (error) {
            console.log(error);
            showMessage({
                message: `Não foi possivel deslogar o usuario devido ao erro de ${error.message}`,
                type: "error",
                backgroundColor: "#EF463A",
                color: "#FFFFFf",
            });
        } finally {
            setLoading(false);
        }
    };

    async function localStorage(data, signOut) {
        try {
            if (data === null && signOut) {
                await AsyncStorage.removeItem('user');
                setUser(null);
                return
            };
            if (data) {
                const dataJSON = JSON.stringify(data);
                await AsyncStorage.setItem('user', dataJSON)
                return
            }
            const getUserLocal = await AsyncStorage.getItem('user');
            const userLocal = JSON.parse(getUserLocal);
            if (!userLocal) {
                console.log('Não possui usuario logado')
                return
            } else {
                setUser({
                    name: userLocal?.name,
                    email: userLocal?.email,
                    uid: userLocal?.uid,
                });
                api.defaults.headers['Authorization'] = `Bearer ${userLocal?.token}`;
            }
        } catch (error) {
            console.log(error)
            showMessage({
                message: `Erro ao tentar buscar dados || ${error.message}`,
                type: "error",
                backgroundColor: "#EF463A",
                color: "#FFFFFf",
            });
        }
    };

    return (
        <AuthContext.Provider
            value={{
                signed: !!user,
                handleSignIn,
                handleSignUp,
                loading,
                loadingUser,
                user,
                handleLogOut
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

