import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../pages/login/signIn";
import SignUp from "../pages/login/signUp";
import { ColorProperties } from "react-native-reanimated/lib/typescript/Colors";

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes() {

    return (
        <AuthStack.Navigator >
            <AuthStack.Screen name="signIn" component={SignIn} options={{
                headerShown: false }} />
            <AuthStack.Screen name="signUp" component={SignUp} />
        </AuthStack.Navigator>)
}