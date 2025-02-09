import { useEffect, useState } from "react";
import styled from "styled-components";


export default function Balance({ data }) {

    const [infotTag, setInfotTag] = useState({ tag: '', value: 0, color: '' });

    useEffect(() => {
        if (data.tag === 'saldo') {
            setInfotTag({ tag: 'Saldo atual', value: data.saldo, color: "#3B3DBF" });
        } else if (data.tag === 'receita') {
            setInfotTag({ tag: 'Receita do dia', value: data.saldo, color: "#00B94A" });
        } else if (data.tag === 'despesa') {
            setInfotTag({ tag: 'Despesa do dia', value: data.saldo, color: "#EF463A" });
        }
    }, [data]);

    return (
        <Container $bg={infotTag?.color}>
            <Tag>{infotTag?.tag}</Tag>
            <Value>{`R$ ${infotTag?.value}`}</Value>
        </Container>
    )
}


const Container = styled.View`
    flex: 1;
    background-color: ${props => props.$bg};
    height: 180px;
    width: 300px;
    margin: 10px 5px;
    justify-content: center;
    border-radius: 8px;
    padding: 5%;
`;

const Tag = styled.Text`
    color: #FFFFFF;
    font-size: 25px;
`;

const Value = styled.Text`
    color: #FFFFFF;
    font-size: 30px;
`;
