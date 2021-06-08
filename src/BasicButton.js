import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
export default function BasicButton({
    customStyle,
    text,
    onPress,
}) {
    return (
        <TouchableOpacity style={[styles.container, customStyle]} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        borderRadius: 50,
        padding: 10,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFFFFF',
        textAlign: "center",
    },
});