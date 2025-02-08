import styled from "styled-components";

const Container = styled.SafeAreaView`
    display: flex;
    justify-content:center;
    align-items: start;
    width:100%;
    padding-top: 15px;
`;

const Message = styled.Text`
    font-size: 20px;
`;

const Content = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 10px;
    padding: 8px;
`;

const MenuBtn = styled.TouchableOpacity`
`;

export {
    Container,
    Message,
    Content,
    MenuBtn
}
