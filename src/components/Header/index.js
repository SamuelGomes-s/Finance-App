import Icon from "react-native-vector-icons/AntDesign";
import { Container, Content, MenuBtn, Message } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Header({ $msg }) {

    const navigation = useNavigation()

    function openMenu() {
        navigation.openDrawer();
    }
    
    return (
        <Container>
            <Content>
                <MenuBtn onPress={openMenu}>
                    <Icon name="menufold" size={35} color={"#121212"} />
                </MenuBtn>
                <Message>{$msg}</Message>
            </Content>
        </Container>
    )
}