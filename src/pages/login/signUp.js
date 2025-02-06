import React, { useContext, useState } from "react";
import Input from "../../components/Input";
import { Container } from "./styles";
import SubmitBtn from "../../components/SubmitBtn";
import { AuthContext } from "../../contexts/auth.context";

export default function SignUp() {

    const { handleSignUp, loading } = useContext(AuthContext);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    async function login() {
        //Arrumar avisos aqui.
        if (!name || name.trim() === '') {
            return;
        }
        if (!email || email.trim() === '') {
            return;
        } if (!password || password.trim() === '') {
            return;
        }
        await handleSignUp(name, email, password)
    };

    return (
        <Container>
            <Input
                placeholder="Digite seu nome"
                value={name}
                onChangeText={(text) => setName(text)}
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
                loading={loading}
                text={'Cadastrar'}
                onPress={login}
            />
        </Container>
    )
}