import { TouchableWithoutFeedback, View } from "react-native";
import styled from "styled-components";
import SubmitBtn from "../../../components/SubmitBtn";
import { Calendar, LocaleConfig } from "react-native-calendars";
import React, { useState } from "react";

export default function ModalContent({ $modalVisible }) {
    const [date, setDate] = useState(new Date());
    const [markedDay, setMarkedDay] = useState({});

    function handleDayPress(datePress) {
        setDate(new Date(datePress.dateString));
        let day = {
        };
        day[datePress.dateString] = {
            selected: true,
            selectedColor: '#11e',
            textcolor: '#fff'
        };
        setMarkedDay(day);
    }
    
    return (
        <Container>
            <TouchableWithoutFeedback onPress={$modalVisible}>
                <View style={{ flex: 0.6, backgroundColor: 'rgba(23, 23, 23, 0.50)' }}>
                </View>
            </TouchableWithoutFeedback>
            <ContentCalendar>
                <Calendar
                    style={{ height: "70%" }}
                    markedDates={markedDay}
                    onDayPress={handleDayPress}
                    enableSwipeMonths={true}
                    theme={{
                        todayTextColor: '#ff0000',
                        selectedDayBackgroundColor: '#00adf5',
                        selectedDayText: '#fff'
                    }}
                />
                <SubmitBtn $text={'Filtrar'} />
            </ContentCalendar>
        </Container>
    )
}


const Container = styled.View`
    flex: 1;
`;

const ContentCalendar = styled.View`
    padding-left: 15px;
    padding-right: 15px;
    justify-content: center;
    flex: 1;
    background-color:#ffffff;
`;


//Calendario BR

LocaleConfig.locales['br'] = {
    monthNames: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ],
    monthNamesShort: [
        'Jan.', 'Fev.', 'Mar.', 'Abr.', 'Mai.', 'Jun.', 'Jul.', 'Ago.', 'Set.', 'Out.', 'Nov.', 'Dez.'
    ],
    dayNames: [
        'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'
    ],
    dayNamesShort: [
        'Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.'
    ],
    today: 'Hoje'
}

LocaleConfig.defaultLocale = 'br'

