import React, { useEffect, useState } from "react";
import { Text, View, StatusBar, ScrollView } from "react-native";
import LinearBg from "../../components/LinearBg";
import BottomAppBar from "../../components/BottomAppBar";
import { STATUS_BAR_BACKGROUND_COLOR_PRIMARY } from "../../styles/constants";
import { useNavigation } from "@react-navigation/native";
import CustomTitle from "../../components/CustomTitle";
import Register from "../../components/Register";
import AsyncStorage from "@react-native-community/async-storage";

const registersOld = [
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

interface PaymentRegister {
	expense: boolean;
	title: string;
	value: string;
}

interface HomeProps {
	route: {
		params: { reload: boolean | undefined };
	};
}

const Home: React.FC<HomeProps> = ({ route }) => {
	const { navigate } = useNavigation();
	const [paymentRegisters, setPaymentRegisters] = useState<PaymentRegister[]>();

	const openNewInputPage = async () => {
		navigate("YieldOrExpense");
	};

	useEffect(() => {
		reloadPaymentRegisters();
	}, [route]);

	const reloadPaymentRegisters = () => {
		AsyncStorage.getItem("@registers")
			.then((asyncRegisters) => {
				!!asyncRegisters && setPaymentRegisters(JSON.parse(asyncRegisters));
			})
			.catch((err) => console.log(err));
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
					{!!paymentRegisters &&
						paymentRegisters.map((register, index) => {
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
