import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import TodoList from '../components/TodoList';
import { todosData } from "../data/todos";
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const [localData, setLocalData] = React.useState(
        todosData.sort((a, b) => {return a.isCompleted - b.isCompleted})
    );
    const [isHidden, setIshidden] = React.useState(false);
    const navigation = useNavigation();

    const handleHidePress = () => {
        if (isHidden){
            setIshidden(false)
            setLocalData(todosData.sort((a, b) => {return a.isCompleted - b.isCompleted}))
            return;
        }
        setIshidden(!isHidden)
        setLocalData(localData.filter(todo => !todo.isCompleted ))
    }
  return (
    <View style={styles.container}>
        <Image
        source={{ uri: "https://lh3.googleusercontent.com/a/AAcHTtf2INxuOjODqMfzVywHGLbq28eNH-hhqOLTdzDknCI=s83-c-mo"}}
        style={styles.pic}
        />
        <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
            <Text style={styles.title}>Por hacer Hoy</Text>
            <TouchableOpacity onPress={handleHidePress}>
            <Text style={{color:"#3478f6"}}>{isHidden ? "Mostrar completados" : "Guardar completados" }</Text>
            </TouchableOpacity>
        </View>

        <TodoList todosData={localData.filter(todo => todo.isToday)}/>

        <Text style={styles.title}>Por hacer Mañana</Text>
        <TodoList todosData={todosData.filter(todo => !todo.isToday)}/>
        <TouchableOpacity onPress={() => navigation.navigate("Agregar")} style={styles.button}>
            <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 15
  },
  pic: {
    width:50,
    height:50,
    borderRadius:25,
    alignSelf: "flex-end"
  },
  title:{
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 35,
    margin: 10,
  },
  button:{
    width: 42,
    height:42,
    borderRadius:21,
    backgroundColor:"#000",
    position: "absolute",
    bottom: 50,
    right: 40,
    shadowColor: "#000",
    shadowOffset:{
        width: 0,
        height: 2,
    },
    shadowOpacity: .5,
    shadowRadius: 5,
    elevation: 5,
  },
  plus:{
    fontSize:40,
    color:"#fff",
    position:"absolute",
    top: -8,
    left: 10,
  }
});