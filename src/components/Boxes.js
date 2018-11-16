import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const Boxes = (props) => {
    return (
        <TouchableOpacity style={styles.containerStyle} onPress={props.onPress}>
            <Text style={styles.textStyle}>{props.text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        height: 100,
        width: 90,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#87CEEB'
    },
    textStyle: {
        fontSize: 40
    }
});

export default Boxes;