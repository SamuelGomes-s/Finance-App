import React, { useContext } from "react";
import { View } from "react-native";
import SubmitBtn from "../../components/SubmitBtn";
import { Container, ContentBtn, LogOutBtn, Title } from "./styles";
import { AuthContext } from "../../contexts/auth.context";

export default function Profile() {
    const { user } = useContext(AuthContext);
    return (
        <Container>
            <Title>
                Bem vindo de volta!!
            </Title>
            <Title>{user?.name}</Title>
            <SubmitBtn text={'Registrar gastos'} />
            <LogOutBtn>
                <ContentBtn>
                    Sair
                </ContentBtn>
            </LogOutBtn>
        </Container>
    )
}