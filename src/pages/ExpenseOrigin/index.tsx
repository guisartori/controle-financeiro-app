import React, { useState } from "react";
import { Text, View, StatusBar, StyleSheet } from "react-native";
import LinearBg from "../../components/LinearBg";
import CustomTitle from "../../components/CustomTitle";
import { STATUS_BAR_BACKGROUND_COLOR_SECUNDARY } from "../../styles/constants";
import CancelButton from "../../components/CancelButton";
import FlatButton from "../../components/FlatButton";
import { useNavigation } from "@react-navigation/native";
import CustomTextInput from "../../components/CustomTextInput";
import NextButton from "../../components/NextButton";

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

interface ExpenseOriginProps {
	route: {
		params: {
			expense: boolean;
			value: string;
		};
	};
}

const ExpenseOrigin: React.FC<ExpenseOriginProps> = ({ route }) => {
	const navigator = useNavigation();
	const [origin, setOrigin] = useState("");

	const handleCancelPress = () => {
		navigator.navigate("Home");
	};

	const handlePressNext = () => {
		navigator.navigate("Congrats", {
			text: "Sua despesa foi salva, mas não esqueça de economizar!!",
			expense: route.params.expense,
			value: route.params.value,
			origin,
		});
	};

	const handleChangeValueInput = () => {};

	return (
		<View style={styles.page}>
			<StatusBar
				barStyle="light-content"
				backgroundColor={STATUS_BAR_BACKGROUND_COLOR_SECUNDARY}
			/>
			<LinearBg />
			<CustomTitle title="Como você ganhou esse dinheiro?" />
			<View style={styles.container}>
				<CustomTextInput
					onChange={setOrigin}
					variant="default"
					value={origin}
				/>
				<NextButton onPress={handlePressNext} />
			</View>
			<CancelButton onPress={handleCancelPress} />
		</View>
	);
};

export default ExpenseOrigin;
