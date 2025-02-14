import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { useContext } from "react";
import { Image, Text, View } from "react-native";
import { AuthContext } from "../../contexts/auth.context";

export default function CustomDrawer(props) {

    const { user, handleLogOut } = useContext(AuthContext);

    return (
        <DrawerContentScrollView {...props} style={{ backgroundColor: '#f0f4ff' }}>
            <View style={{ justifyContent: "center", alignItems: "center", marginVertical: 25 }}>
                <Image
                    source={require('../../assets/Logo.png')}
                    style={{ height: 90, width: 90 }}
                    resizeMode="contain"
                />
                <Text
                    style={{ fontSize: 20, paddingTop: 20 }}
                >
                    Bem vindo de volta
                </Text>
                <Text
                    style={{ fontSize: 20, fontWeight: 'bold', paddingHorizontal: 20 }}
                    numberOfLines={1}
                >
                    {user?.name}
                </Text>
            </View>
            <DrawerItemList {...props} />
            <DrawerItem
                label={'Sair'}
                labelStyle={{ fontSize: 18 }}
                onPress={() => handleLogOut()}
                style={{ marginTop: 20, }}
                inactiveTintColor="#ef463a"
            />
        </DrawerContentScrollView>
    )
}