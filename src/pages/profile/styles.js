import styled from "styled-components";

const Container = styled.View`
    flex: 1;
    background-color: #f0f4ff;
    padding-left: 15px;
    padding-right: 15px;
`;

const Content = styled.View`
    align-items: center;
    padding-top: 25%;
    width: 100%;
`;

const Title = styled.Text`
    font-size: 22px;
    padding-bottom: 10px;
`;

const LogOutBtn = styled.TouchableOpacity`
    background-color:rgb(255, 255, 255);
    border: 1px solid #EF463A;
    padding-left: 10px;
    padding-right: 10px;
    width:100%;
    height:45px;
    margin: 5px 0;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
`;

const ContentBtn = styled.Text`
    color:#EF463A;
    font-weight: bold;
    font-size: 18px;
`;

export {
    Container,
    LogOutBtn,
    ContentBtn,
    Title,
    Content
}