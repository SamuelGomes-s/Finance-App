import React, { useContext, useState } from "react";
import { Image, View } from "react-native";
import Input from "../../components/Input";
import { Container, LinkBtn, LinkText } from "./styles";
import SubmitBtn from "../../components/SubmitBtn";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../assets/Logo.png"
import { AuthContext } from "../../contexts/auth.context";

export default function SignIn() {

    const { handleSignIn, loading } = useContext(AuthContext);
    const navigation = useNavigation();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function handleLink() {
        navigation.navigate('signUp')
    }

    async function login() {
        //Arrumar avisos aqui.
        if (!email || email.trim() === '') {
            return;
        } if (!password || password.trim() === '') {
            return;
        }
        await handleSignIn(email, password)
    }

    return (
        <Container>
            <Image
                source={Logo}
                style={{ height: 150, width: 150, resizeMode: 'contain', marginBottom: 30 }}
            />
            <Input
                placeholder="Digite seu email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <Input
                placeholder="Digite sua senha"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
            />
            <SubmitBtn
                $loading={loading}
                $text={'Acessar'}
                onPress={login}
            />
            <LinkBtn
                onPress={handleLink}
            >
                <LinkText>
                    Não possui uma conta? Crie uma
                </LinkText>
            </LinkBtn>
        </Container>
    )
}