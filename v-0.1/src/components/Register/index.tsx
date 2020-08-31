import React from "react";
import { View, Text, Image } from "react-native";

import positiveIcon from "../../assets/img/positive.png";
import negativeIcon from "../../assets/img/negative.png";

interface RegisterProps {
	register: {
		expense: boolean;
		title: string;
		value: string;
	};
}

const Register: React.FC<RegisterProps> = ({ register }) => {
	return (
		<View
			style={{
				flexDirection: "row",
				width: "100%",
				paddingVertical: 18,
				alignItems: "center",
				paddingHorizontal: 16,
				borderBottomWidth: 1,
				borderBottomColor: "#fff",
			}}
		>
			<Image
				source={register.expense ? negativeIcon : positiveIcon}
				style={{ width: 15, height: 15 }}
			/>
			<Text style={{ marginLeft: 20, color: "#fff", fontSize: 20 }}>
				{register.title}
			</Text>
			<Text
				style={{
					justifyContent: "flex-end",
					position: "absolute",
					right: 16,
					color: "#fff",
					fontSize: 22,
				}}
			>
				{register.value}
			</Text>
		</View>
	);
};

export default Register;
