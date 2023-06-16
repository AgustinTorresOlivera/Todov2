import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Checkbox from "./Checkbox";

export default function Todo({
    id,
    text,
    isCompleted,
    isToday,
    hour
}){
    return (
        <View style={styles.container}>
            <Checkbox 
                id={id}
                text={text}
                isCompleted={isCompleted}
                isToday={isToday}
                hour={hour}
                />
                <View>
                <Text style={
                     isCompleted
                     ?[styles.text, {textDecorationLine: "line-through", color: "#73737330"}]
                     :styles.text
                     }>{text}</Text>
             <Text style={
                     isCompleted
                     ?[styles.time, {textDecorationLine: "line-through", color: "#73737330"}]
                     :styles.time
                     }>{hour}</Text>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    text:{
        fontSize: 15,
        fontWeight: "500",
        color: "#80ff80"
    },
    time: {
        fontSize: 13,
        color: "#a3a3a3",
        fontWeight: "500"
    }

})