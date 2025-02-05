import React, { useState } from "react";
import { View } from "react-native";
import Input from "../../components/Input";
import { Container } from "./styles";
import SubmitBtn from "../../components/SubmitBtn";

export default function SignIn() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <Container>
            <Input placeholder="Digite seu nome" />
            <Input placeholder="Digite seu email" />
            <Input placeholder="Digite sua senha" />
            <SubmitBtn loading={false} text={'Cadastrar'} />
        </Container>
    )
}