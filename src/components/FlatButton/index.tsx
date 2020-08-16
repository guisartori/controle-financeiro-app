import React from "react";
import { Text, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

interface FlatButtonProps {
	title: string;
	onPress: () => void;
}

const styles = StyleSheet.create({
	button: {
		width: "80%",
		height: 60,
		alignItems: "center",
		justifyContent: "center",
		alignSelf: "center",
		marginBottom: 30,
	},
	buttonText: {
		color: "#fff",
		fontSize: 30,
	},
});

const FlatButton: React.FC<FlatButtonProps> = ({ title, onPress }) => {
	return (
		<RectButton onPress={onPress} style={styles.button}>
			<Text style={styles.buttonText}>{title}</Text>
		</RectButton>
	);
};

export default FlatButton;
