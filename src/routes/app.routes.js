import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/home";
import Register from "../pages/register";
import Profile from "../pages/profile";

const AppStack = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <AppStack.Navigator>
            <AppStack.Screen name="homne" component={Home} />
            <AppStack.Screen name="register" component={Register} />
            <AppStack.Screen name="profile" component={Profile} />
        </AppStack.Navigator>
    )
}