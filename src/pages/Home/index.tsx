import React from "react";
import { Text, View, StatusBar } from "react-native";
import LinearBg from "../../components/LinearBg";
import BottomAppBar from "../../components/BottomAppBar";
import { STATUS_BAR_BACKGROUND_COLOR_PRIMARY } from "../../styles/constants";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
	const { navigate } = useNavigation();
	const openNewInputPage = () => {
		navigate("YieldOrExpense");
	};

	return (
		<View
			style={{
				flex: 1,
				justifyContent: "flex-end",
			}}
		>
			<StatusBar
				barStyle="dark-content"
				backgroundColor={STATUS_BAR_BACKGROUND_COLOR_PRIMARY}
			/>
			<LinearBg />
			<BottomAppBar onFabPress={openNewInputPage} />
		</View>
	);
};

export default Home;
