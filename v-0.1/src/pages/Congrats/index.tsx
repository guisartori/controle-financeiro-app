import React, { useEffect, useState } from "react";
import { Text, View, StatusBar, StyleSheet } from "react-native";
import LinearBg from "../../components/LinearBg";
import { STATUS_BAR_BACKGROUND_COLOR_SECUNDARY } from "../../styles/constants";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import AsyncStorage from "@react-native-community/async-storage";

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
		params: Params;
	};
}

interface Params {
	text: string;
	expense: boolean;
	value: string;
	origin: string;
}

interface PaymentRegister {
	expense: boolean;
	title: string;
	value: string;
}

const Congrats: React.FC<CongratsProps> = ({ route }) => {
	const navigator = useNavigation();

	useEffect(() => {
		AsyncStorage.getItem("@registers")
			.then((asyncRegisters) => {
				const payments = JSON.parse(String(asyncRegisters));
				payments.push({
					expense: route.params.expense,
					title: route.params.origin,
					value: route.params.value,
				});
				try {
					AsyncStorage.setItem("@registers", JSON.stringify(payments));
				} catch (error) {
					alert(error);
				}
			})
			.catch((err) => console.log(err));

		setTimeout(() => {
			navigator.navigate("Home", { reload: true });
		}, 1500);
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
