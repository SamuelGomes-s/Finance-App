import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../pages/login/signIn";
import SignUp from "../pages/login/signUp";

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes() {

    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="signUp" component={SignUp} options={{ headerShown: false }} />
            <AuthStack.Screen name="signIn" component={SignIn} />
        </AuthStack.Navigator>)
}