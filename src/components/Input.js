import React from 'react';
import { Text } from 'react-native';

const Input = (props) => {
    return (
        <Text style={{ fontSize: 80 }}>{props.children}</Text>
    );
};

export default Input;