import styled from "styled-components";

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #f0f4ff;
    padding-left: 15px;
    padding-right: 15px;
`;

const Content = styled.View`
    flex: 1;
    padding-top: 10%;
`;

const ContentBtn = styled.View`
    flex: 1;
    display:flex;
    justify-content: center;
    align-items:center;
    flex-direction: row;
    max-height: 60px;
    gap: 5px;
`;

export {
    ContentBtn,
    Container,
    Content
}