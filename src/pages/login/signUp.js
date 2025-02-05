import React, { useState } from "react";
import { Image } from "react-native";
import Input from "../../components/Input";
import { Container, LinkBtn, LinkText } from "./styles";
import Logo from "../../assets/Logo.png"
import SubmitBtn from "../../components/SubmitBtn";
import { useNavigation } from "@react-navigation/native";


export default function SignUp() {

    const navigation = useNavigation();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function handleLink() {
        navigation.navigate('signIn')
    }
    return (
        <Container>
            <Image source={Logo} style={{ height: 150, width: 150, resizeMode: 'contain', marginBottom: 30 }} />
            <Input placeholder="Digite seu email" />
            <Input placeholder="Digite seu email" />
            <SubmitBtn loading={false} text={'Acessar'} />
            <LinkBtn onPress={handleLink}>
                <LinkText>
                    Não possui uma conta! Crie uma
                </LinkText>
            </LinkBtn>
        </Container>
    )
}