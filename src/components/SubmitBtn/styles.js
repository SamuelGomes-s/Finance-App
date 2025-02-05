import styled from "styled-components";

const Container = styled.TouchableOpacity`
    background-color: #3B3DBF;
    padding-left: 10px;
    padding-right: 10px;
    width:100%;
    height:45px;
    margin: 5px 0;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
`;

const Content = styled.Text`
    color: #FFFFFF;
    font-weight: bold;
    font-size: 18px;
`;

export {
    Container,
    Content
};