// Import React
import { KeyboardTypeOptions, TextInput, TextStyle, ViewStyle } from "react-native";

interface ITextInputProps {
    value: string;
    onChange: ((text: string) => void) | undefined
    placeholder?: string;
    keyboardType?: KeyboardTypeOptions;
    secureTextEntry?: boolean;
    styles?: ViewStyle | TextStyle
}

function Input(props:ITextInputProps): JSX.Element {
    // destruct props
    const {value, onChange, placeholder, keyboardType, secureTextEntry, styles} = props;    

    return (
        <TextInput 
            keyboardType={keyboardType}
            onChangeText={onChange} 
            placeholderTextColor={'gray'} 
            value={value} 
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            autoCapitalize="none"
            style={styles} 
        />

    )
}

export default Input;