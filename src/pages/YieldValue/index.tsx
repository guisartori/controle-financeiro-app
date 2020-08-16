import React from "react";
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

const YieldValue = () => {
	const navigator = useNavigation();

	const handleCancelPress = () => {
		navigator.goBack();
	};

	const handlePressNext = () => {
		navigator.navigate("YieldOrigin");
	};

	const handleChangeValueInput = () => {};

	return (
		<View style={styles.page}>
			<StatusBar
				barStyle="light-content"
				backgroundColor={STATUS_BAR_BACKGROUND_COLOR_SECUNDARY}
			/>
			<LinearBg />
			<CustomTitle title="Me fala. Ganhou quanto dessa vez?" />
			<View style={styles.container}>
				<CustomTextInput
					onChange={handleChangeValueInput}
					variant="number-pad"
				/>
				<NextButton onPress={handlePressNext} />
			</View>
			<CancelButton onPress={handleCancelPress} />
		</View>
	);
};

export default YieldValue;
