import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

const styles = StyleSheet.create({
	button: {
		width: "100%",
		height: 60,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 14,
	},
	linear: {
		width: "80%",
		height: 60,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 14,
		alignSelf: "center",
		position: "absolute",
		bottom: 40,
	},
	buttonText: {
		color: "#fff",
		fontSize: 22,
		textTransform: "uppercase",
	},
});

interface CancelButtonProps {
	onPress: () => void;
}

const CancelButton: React.FC<CancelButtonProps> = ({ onPress }) => {
	return (
		<LinearGradient colors={["#FB5607", "#FF006E"]} style={styles.linear}>
			<RectButton onPress={onPress} style={styles.button}>
				<Text style={styles.buttonText}>Cancelar</Text>
			</RectButton>
		</LinearGradient>
	);
};

export default CancelButton;
