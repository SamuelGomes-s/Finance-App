import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Container, Content, ContentMovements, FilterArea } from "./styles";
import { api } from "../../services/api/apiBackend";
import { format } from "date-fns";
import Balance from "./components/balance";
import { useIsFocused } from "@react-navigation/native";
import { ActivityIndicator, Modal, SafeAreaView, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import MovementsList from "./components/movementsList";
import Icon from "react-native-vector-icons/AntDesign";
import ModalContent from "./components/modal";
import { showMessage } from "react-native-flash-message";

export default function Home() {

  const [balance, setBalance] = useState([]);
  const [loadingBalance, setLoadingBalance] = useState(true);
  const [dateMovements, setDateMovments] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);
  const [movements, setMovements] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    loadBalance()
  }, [isFocused, dateMovements])

  async function loadBalance() {
    try {
      setLoadingBalance(true);
      const dateFormated = format(new Date(dateMovements), 'dd/MM/yyyy');
      const responseMovements = await api.get('/receives', {
        params: {
          date: dateFormated
        }
      });
      setMovements(responseMovements.data);
      const responseBalance = await api.get('balance', {
        params: {
          date: dateFormated
        }
      });
      setBalance(responseBalance.data);
    } catch (error) {
      console.log(error.message);
      showMessage({
        message: `Erro ao buscar dados do saldo ${error.message}`,
        type: "error",
        backgroundColor: "#EF463A",
        color: "#FFFFFf",
      });
    } finally {
      setLoadingBalance(false);
    }
  };

  function handleDeleteMovements(item) {
    Alert.alert("Alerta", `Você esta deletando o registro ${item.description} com o valor de R$ ${item.value}.`, [
      {
        text: 'Cancelar',
        onPress: () => { },
        style: 'cancel'
      },
      {
        text: 'Confirmar',
        onPress: () => deleteItem(item.id),
      },
    ]);
  };

  async function deleteItem(id) {
    try {
      const response = await api.delete('/receives/delete', {
        params: {
          item_id: id
        }
      })
      loadBalance();
      showMessage({
        message: `Registro deletado com sucesso!`,
        type: "success",
        backgroundColor: "#00B94A",
        color: "#FFFFFf",
      });
    } catch (error) {
      console.log(error.message);
    };
  };

  async function handleFilter(dateSelected) {
    setModalVisible(false);
    setDateMovments(dateSelected);
  };

  if (loadingBalance) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f0f4ff" }}>
        <ActivityIndicator size={80} color={'#6567DD'} />
      </SafeAreaView>
    );
  };

  return (
    <Container>
      <Content>
        <Header $msg={'Minhas movimentações'} />
        <FlatList
          data={balance}
          keyExtractor={item => item.tag}
          renderItem={({ item }) => <Balance data={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </Content>
      <ContentMovements>
        <FilterArea>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Icon name="calendar" size={25} color={"#000"} />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, color: "#000" }}>Ultimas movimentações</Text>
        </FilterArea>
        {movements.length === 0 ?
          (< Text style={{ textAlign: "center", marginTop: 25 }}>
            Não possui movimentos registrados na data {dateMovements.toLocaleDateString()}...
          </Text>)
          :
          (<FlatList
            data={movements}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <MovementsList data={item} deleteItem={handleDeleteMovements} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          />)}
      </ContentMovements>
      <Modal visible={modalVisible} animationType="fade" transparent={true} >
        <ModalContent $modalVisible={() => setModalVisible(false)} $filter={handleFilter} />
      </Modal>
    </Container>
  )
}
