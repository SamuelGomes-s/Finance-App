import styled from "styled-components";
import Icon from "react-native-vector-icons/AntDesign";

export default function Type({ $typemsg, $iconName, $selected, ...props }) {

    return (
        <Container $selected={$selected}{...props}>
            <Icon name={$iconName} size={25} color={$selected ? "#3B3DBF" : "#EF463A"} />
            <Typemsg $color={$selected}>
                {$typemsg}
            </Typemsg>
        </Container>
    )
}


const Container = styled.TouchableOpacity`
    background-color: ${props => props.$selected ? "#ffff" : "#d9d9d9"};
    border:  ${props => props.$selected ? "2px #3B3DBF" : "0"};
    display: flex;
    flex: 1;
    padding: 10px;
    justify-content: center;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 8px;
    flex-direction: row;
`;

const Typemsg = styled.Text`
    color: ${props => props.$color ? "#3B3DBF" : "#EF463A"};
`;