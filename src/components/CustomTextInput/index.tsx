import React from "react";
import { TextInput } from "react-native";

interface CustomTextProps {
	onChange: () => void;
	variant: "default" | "number-pad";
}

const CustomTextInput: React.FC<CustomTextProps> = ({ onChange, variant }) => {
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
			onChange={onChange}
		/>
	);
};

export default CustomTextInput;
