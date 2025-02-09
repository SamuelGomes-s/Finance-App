import React, { useState } from "react";
import Header from "../../components/Header";
import Input from "../../components/Input"
import { Container, Content, ContentBtn } from "./styles";
import Type from "./components/Type";
import SubmitBtn from "../../components/SubmitBtn";
import { api } from "../../services/api/apiBackend"
import { format } from "date-fns";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

export default function Register() {

  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [type, setType] = useState('receita');

  async function handleAddRegister() {

    if (!description || description.trim() === '') {
      alert('A nome do registro deve ser preenchido');
      return
    }

    if (!value || Number(value <= 0)) {
      alert('O valor do registro deve estar preenchido e ser um numero positivo e valido');
      return
    }

    try {
      Keyboard.dismiss();
      const dateFormated = format(new Date(), 'dd/MM/yyyy');
      const data = {
        description: description,
        value: Number(value),
        type: type,
        date: dateFormated
      };
      const response = await api.post('/receive', data);
      setType('receita');
      setValue('');
      setDescription('');
    } catch (error) {
      console.log(error.message)
    }
  }

  function toggletype(selectedType) {
    if (selectedType !== type) {
      setType(selectedType);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
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
            inputMode={'numeric'}
            value={value}
            onChangeText={(text) => setValue(text)}
          />
          <ContentBtn>
            <Type $typemsg={'Receita'} $iconName={"arrowup"} $selected={type === 'receita'} onPress={() => toggletype('receita')} />
            <Type $typemsg={'Despesa'} $iconName={"arrowdown"} $selected={type === 'despesa'} onPress={() => toggletype('despesa')} />
          </ContentBtn>
          <SubmitBtn $loading={false} $text={"Cadastrar"} $bg={'#00B94A'} onPress={handleAddRegister} />
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  )
}