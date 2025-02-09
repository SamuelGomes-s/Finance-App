import styled from "styled-components";

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #f0f4ff;
`;

const Content = styled.View`
    padding-left: 15px;
    padding-right: 15px;
`;

const ContentMovements = styled.View`
    background-color: #FFFFFF;
    flex: 1;
    margin-top: 15px;
    border-radius: 8px;
`;

const FilterArea = styled.View`
    margin: 10px;
    padding: 5px;
    flex-direction:row;
    align-items: baseline;
    gap: 15px; 
`;

export {
    Container,
    Content,
    ContentMovements,
    FilterArea
}