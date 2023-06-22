// Import React
import React from "react";
import { Text, TextStyle, TouchableOpacity, ViewStyle, Pressable } from "react-native";

interface IButtonProps {
    type: 'Pressable' | 'TouchableOpacity'
    title: string;
    onPress: () => void;
    buttonStyle?: ViewStyle;
    titleStyle?: TextStyle
}

function Button(props: IButtonProps): JSX.Element {
    // destruct props
    const { type, title, onPress, buttonStyle, titleStyle } = props;


    if (type === 'Pressable') {
        return (
            <Pressable onPress={onPress} style={buttonStyle}>
                <Text style={titleStyle}>{title}</Text>
            </Pressable>
        )
    }

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={titleStyle}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;