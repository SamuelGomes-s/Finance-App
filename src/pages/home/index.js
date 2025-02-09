import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Container, Content } from "./styles";
import { api } from "../../services/api/apiBackend";
import { format } from "date-fns";
import Balance from "./components/balance";
import { FlatList } from "react-native-gesture-handler";
import { useIsFocused } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { ActivityIndicator } from "react-native";

export default function Home() {

  const [balance, setBalance] = useState([]);
  const [loadingBalance, setLoaginBalance] = useState(true);
  const [dateMovements, setDateMovments] = useState(new Date());
  const isFocused = useIsFocused();

  useEffect(() => {
    loadBalance()
  }, [isFocused, dateMovements])

  async function loadBalance() {
    try {
      setLoaginBalance(false);
      const dateFormated = format(new Date(dateMovements), 'dd/MM/yyyy');
      const response = await api.get('balance', {
        params: {
          date: dateFormated
        }
      });
      setBalance(response.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoaginBalance(false);
    }
  };

  if (loadingBalance) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f0f4ff" }}>
        <ActivityIndicator size={80} color={'#6567DD'} />
      </SafeAreaView>
    )
  };

  return (
    <Container>
      <Header $msg={'Minhas movimentações'} />
      <Content>
        <FlatList
          data={balance}
          keyExtractor={item => item.tag}
          renderItem={({ item }) => <Balance data={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </Content>
    </Container>
  )
}