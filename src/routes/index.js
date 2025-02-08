import { useContext } from "react"
import AppRoutes from "./app.routes"
import AuthRoutes from "./auth.routes"
import { AuthContext } from "../contexts/auth.context"
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native";

export default function Routes() {

    const { signed, loadingUser } = useContext(AuthContext);

    if (loadingUser) {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f0f4ff" }}>
                <ActivityIndicator size={80} color={'#6567DD'} />
            </SafeAreaView>
        )
    };

    return (
        signed ? <AppRoutes /> : <AuthRoutes />
    )
}