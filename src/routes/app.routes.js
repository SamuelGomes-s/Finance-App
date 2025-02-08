import Home from "../pages/home";
import Register from "../pages/register";
import Profile from "../pages/profile";
import { createDrawerNavigator } from "@react-navigation/drawer";

const AppDrawer = createDrawerNavigator();

export default function AppRoutes() {
    return (
        <AppDrawer.Navigator screenOptions={{headerShown: false}}>
            <AppDrawer.Screen name="home" component={Home} />
            <AppDrawer.Screen name="register" component={Register} />
            <AppDrawer.Screen name="profile" component={Profile} />
        </AppDrawer.Navigator>
    )
}