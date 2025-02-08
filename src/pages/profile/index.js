import React, { useContext } from "react";
import SubmitBtn from "../../components/SubmitBtn";
import { Container, Content, ContentBtn, LogOutBtn, Title } from "./styles";
import { AuthContext } from "../../contexts/auth.context";
import Header from "../../components/Header";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {

    const navigation = useNavigation();
    const { user, handleLogOut, loading } = useContext(AuthContext);

    function logOut() {
        handleLogOut();
    };

    return (
        <Container>
            <Header $msg={'Meu perfil'} />
            <Content>
                <Title>
                    Bem vindo de volta!!
                </Title>
                <Title>{user?.name}</Title>
                <SubmitBtn $loading={loading} $text={'Registrar gastos'} onPress={() => navigation.navigate('register')} />
                <LogOutBtn onPress={logOut}>
                    <ContentBtn>
                        {loading ? (<ActivityIndicator size={'small'} color={'#EF463A'} />) : 'Sair'}
                    </ContentBtn>
                </LogOutBtn>
            </Content>
        </Container>
    )
}