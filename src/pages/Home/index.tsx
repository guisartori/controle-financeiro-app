import React from "react";
import { Text, View, StatusBar, ScrollView } from "react-native";
import LinearBg from "../../components/LinearBg";
import BottomAppBar from "../../components/BottomAppBar";
import { STATUS_BAR_BACKGROUND_COLOR_PRIMARY } from "../../styles/constants";
import { useNavigation } from "@react-navigation/native";
import CustomTitle from "../../components/CustomTitle";
import Register from "../../components/Register";

const registers = [
	{ expense: false, title: "Workana", value: "R$ 4000,00" },
	{ expense: true, title: "Bolacha", value: "R$ 180,00" },
	{ expense: true, title: "onibus", value: "R$ 5,00" },
	{ expense: true, title: "onibus", value: "R$ 5,00" },
	{ expense: true, title: "onibus", value: "R$ 5,00" },
	{ expense: true, title: "onibus", value: "R$ 5,00" },
	{ expense: true, title: "onibus", value: "R$ 5,00" },
	{ expense: true, title: "onibus", value: "R$ 5,00" },
	{ expense: false, title: "Workana", value: "R$ 4000,00" },
	{ expense: true, title: "onibus", value: "R$ 5,00" },
	{ expense: true, title: "onibus", value: "R$ 5,00" },
	{ expense: true, title: "onibus", value: "R$ 5,00" },
];

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
			<View
				style={{
					flex: 1,
					margin: 16,
				}}
			>
				<CustomTitle title="Agosto/2020" />
				<ScrollView style={{ flex: 1, paddingTop: 16 }}>
					{registers.map((register, index) => {
						return <Register register={register} key={index} />;
					})}
				</ScrollView>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						padding: 16,
					}}
				>
					<Text style={{ color: "#fff", fontSize: 18 }}>Saldo: </Text>
					<Text style={{ color: "#fff", fontSize: 18 }}> R$: 4000,00</Text>
				</View>
			</View>
			<BottomAppBar onFabPress={openNewInputPage} />
		</View>
	);
};

export default Home;
