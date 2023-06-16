import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Switch} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

export default function AddTodo() {
    const [name, setName] = React.useState('');
    const [date, setDate] = React.useState(new Date());
    const [isToday, setIsToday] = React.useState(false);
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Nueva Tarea</Text>
            <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>Nombre</Text>
            <TextInput
                style={styles.TextInput}
                placeholder='Tarea'
                placeholderTextColor="#00000030"
                onChangeText={(text) =>{setName(text)}}
            />
            </View>
             <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Hora</Text>
                <DateTimePicker
                value={date}
                mode={'time'}
                is24Hour={true}
                onChange={(event, selectedDate) => setDate(selectedDate)}
                style={{width: '80%'}}
                />
             </View>
             <View style={styles.inputContainer}/>
             <Text style={styles.inputTitle}>Hoy</Text>
             <Switch
             value={isToday}
             onValueChange={(value) => {setIsToday(value) }}
             />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#f7f8fA",
        paddingHorizontal: 30,
    },
    title:{
        fontSize: 34,
        fontWeight: "bold",
        marginBottom: 35,
        margin: 10,
    },
    inputTitle: {
        fontSize: 20,
        fontWeight: "600",
        lineHeight: 24
    },
    TextInput: {
        borderBottomColor: "#00000030",
        borderBottomWidth: 1,
        width: "80%",
    },
    inputContainer: {
        justifyContent: "space-between",
        flexDirection: "row",
        paddingBottom: 30,

    },
})