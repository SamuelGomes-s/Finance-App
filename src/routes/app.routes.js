import Home from "../pages/home";
import Register from "../pages/register";
import Profile from "../pages/profile";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../components/CustomDrawer";

const AppDrawer = createDrawerNavigator();

export default function AppRoutes() {
    return (
        <AppDrawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerItemStyle: {
                    marginTop: 15,
                    borderRadius: 8,
                },
                drawerActiveBackgroundColor: '#3B3DBF',
                drawerActiveTintColor: '#fff',
                drawerInactiveBackgroundColor: '#d9d9d9',
                drawerInactiveTintColor: '#000',
            }}
        >
            <AppDrawer.Screen name="home" component={Home} options={{ title: "Home" }} />
            <AppDrawer.Screen name="register" component={Register} options={{ title: "Registrar movimentação" }} />
            <AppDrawer.Screen name="profile" component={Profile} options={{ title: "Meu perfil" }} />
        </AppDrawer.Navigator>
    )
}