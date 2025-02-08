import React, { useContext } from "react";
import SubmitBtn from "../../components/SubmitBtn";
import { Container, Content, ContentBtn, LogOutBtn, Title } from "./styles";
import { AuthContext } from "../../contexts/auth.context";
import Header from "../../components/Header";

export default function Profile() {
    const { user } = useContext(AuthContext);
    return (
        <Container>
            <Header $msg={'Meu perfil'} />
            <Content>
                <Title>
                    Bem vindo de volta!!
                </Title>
                <Title>{user?.name}</Title>
                <SubmitBtn $text={'Registrar gastos'} />
                <LogOutBtn>
                    <ContentBtn>
                        Sair
                    </ContentBtn>
                </LogOutBtn>
            </Content>
        </Container>
    )
}