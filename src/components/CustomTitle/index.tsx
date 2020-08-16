import React from "react";
import { Text, View } from "react-native";
import LinearBg from "../../components/LinearBg";

interface CustomTitleProps {
	title: string;
}

const CustomTitle: React.FC<CustomTitleProps> = ({ title }) => {
	return (
		<View
			style={{
				alignItems: "center",
				marginTop: 40,
				width: "80%",
				alignSelf: "center",
				justifyContent: "center",
			}}
		>
			<Text
				style={{
					color: "white",
					fontSize: 30,
					textAlign: "center",
				}}
			>
				{title}
			</Text>
		</View>
	);
};

export default CustomTitle;
