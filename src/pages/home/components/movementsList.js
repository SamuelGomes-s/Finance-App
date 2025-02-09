import { Text } from "react-native";
import styled from "styled-components";
import Icon from "react-native-vector-icons/AntDesign";


export default function MovementsList({ data, deleteItem }) {

    return (
        <Container onLongPress={() => deleteItem(data)}>
            <ContentIcon $bg={data.type}>
                <Icon name={data?.type === 'receita' ? 'arrowup' : "arrowdown"} size={20} color={"#ffffff"} />
                <Text style={{ color: "#ffffff" }}> {data?.type}</Text>
            </ContentIcon>
            <Price>R$ {data?.value}</Price>
        </Container>
    )

}


const Container = styled.TouchableOpacity`
    background-color: #F0F4FF;
    flex: 1;
    padding: 15px;
    margin-top: 10px;
    margin-left: 15px;
    margin-right: 15px;
    border-radius: 8px;
`;

const ContentIcon = styled.View`
    background-color: ${props => props.$bg === "receita" ? "#00B94A" : "#EF463A"};
    flex: 1;
    padding: 5px;
    align-items: center;
    justify-content: center;
    width: 120px;
    flex-direction: row;
    margin: 5px;
    gap: 5px;
    border-radius: 8px;
`;

const Price = styled.Text`
    font-weight: bold;
    font-size: 25px;
    padding: 5px;

`;