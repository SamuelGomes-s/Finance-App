import React, { useState } from "react";
import Header from "../../components/Header";
import Input from "../../components/Input"
import { Container, Content, ContentBtn } from "./styles";
import Type from "./components/Type";
import SubmitBtn from "../../components/SubmitBtn";

export default function Register() {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState();
  const [type, setType] = useState('receive');
  const [typeSelected, setTypeSelected] = useState(true);

  function toggletype($type) {
    setType($type)
    setTypeSelected(!typeSelected)
  }

  return (
    <Container>
      <Header $msg={'Registrar movimentação'} />
      <Content>
        <Input
          placeholder="Nome"
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
        <Input
          placeholder="Valor desejado"
          value={value}
          onChangeText={(text) => setValue(text)}
        />
        <ContentBtn>
          <Type $typemsg={'Receita'} $iconName={"arrowup"} $selected={typeSelected} onPress={() => toggletype('receives')} />
          <Type $typemsg={'Despesa'} $iconName={"arrowdown"} $selected={!typeSelected} onPress={() => toggletype('cost')} />
        </ContentBtn>
        <SubmitBtn $loading={false} $text={"Cadastrar"} $bg={'#00B94A'} />
      </Content>
    </Container>
  )
}