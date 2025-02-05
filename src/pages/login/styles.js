import styled from "styled-components";

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #f0f4ff;
    padding-left: 15px;
    padding-right: 15px;
    justify-content: center;
    align-items: center;
`;

const LinkBtn = styled.TouchableOpacity`
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
`;

const LinkText = styled.Text`
    color: #171717;
`;

export {
    Container,
    LinkBtn,
    LinkText
};