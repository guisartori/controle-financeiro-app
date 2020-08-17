import React, { useEffect } from "react";
import { Text, View, StatusBar, StyleSheet } from "react-native";
import LinearBg from "../../components/LinearBg";
import { STATUS_BAR_BACKGROUND_COLOR_SECUNDARY } from "../../styles/constants";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

const styles = StyleSheet.create({
	page: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		color: "#fff",
		fontSize: 30,
		width: "90%",
		textAlign: "center",
	},
});

interface CongratsProps {
	route: {
		params: {
			text: string;
		};
	};
}

const Congrats: React.FC<CongratsProps> = ({ route }) => {
	const navigator = useNavigation();

	useEffect(() => {
		setTimeout(() => {
			navigator.navigate("Home");
		}, 2000);
	}, []);

	return (
		<View style={styles.page}>
			<StatusBar
				barStyle="light-content"
				backgroundColor={STATUS_BAR_BACKGROUND_COLOR_SECUNDARY}
			/>
			<LinearBg />
			<Text style={styles.text}>{route.params.text}</Text>
		</View>
	);
};

export default Congrats;
