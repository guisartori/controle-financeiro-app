import React from "react";
import {
	TextInput,
	TextInputChangeEventData,
	NativeSyntheticEvent,
} from "react-native";

interface CustomTextProps {
	onChange: (text: string) => void;
	variant: "default" | "number-pad";
	value: string;
}

const CustomTextInput: React.FC<CustomTextProps> = ({
	onChange,
	variant,
	value,
}) => {
	return (
		<TextInput
			style={{
				fontSize: 24,
				width: "80%",
				padding: 14,
				borderBottomColor: "#FFF",
				borderBottomWidth: 2,
				color: "#fff",
				textAlign: "right",
			}}
			keyboardType={variant}
			autoFocus
			onChangeText={(text) => onChange(text)}
			value={value}
		/>
	);
};

export default CustomTextInput;
