import React, { useState } from "react";
import { Image, View } from "react-native";
import Input from "../../components/Input";
import { Container, LinkBtn, LinkText } from "./styles";
import SubmitBtn from "../../components/SubmitBtn";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../assets/Logo.png"

export default function SignIn() {

    const navigation = useNavigation();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function handleLink() {
        navigation.navigate('signUp')
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