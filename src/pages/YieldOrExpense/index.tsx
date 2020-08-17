import React from "react";
import { Text, View, StatusBar, StyleSheet } from "react-native";
import LinearBg from "../../components/LinearBg";
import CustomTitle from "../../components/CustomTitle";
import { STATUS_BAR_BACKGROUND_COLOR_SECUNDARY } from "../../styles/constants";
import CancelButton from "../../components/CancelButton";
import FlatButton from "../../components/FlatButton";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
	page: {
		flex: 1,
		justifyContent: "flex-start",
	},
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 80,
	},
});

const YieldOrExpense = () => {
	const navigator = useNavigation();

	const handleCancelPress = () => {
		navigator.navigate("Home");
	};

	const handleYieldPress = () => {
		navigator.navigate("YieldValue");
	};

	const handleExpensePress = () => {
		navigator.navigate("ExpenseValue");
	};

	return (
		<View style={styles.page}>
			<StatusBar
				barStyle="light-content"
				backgroundColor={STATUS_BAR_BACKGROUND_COLOR_SECUNDARY}
			/>
			<LinearBg />
			<CustomTitle title="E, aí! Novidades?" />
			<View style={styles.container}>
				<FlatButton title="Rendimento" onPress={handleYieldPress} />
				<FlatButton title="Despesa" onPress={handleExpensePress} />
			</View>
			<CancelButton onPress={handleCancelPress} />
		</View>
	);
};

export default YieldOrExpense;
