import React from "react";
import { TextInput, Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import nextIcon from "../../assets/img/next.png";

interface NextButtonProps {
	onPress: () => void;
}

const NextButton: React.FC<NextButtonProps> = ({ onPress }) => {
	return (
		<RectButton
			style={{
				alignSelf: "flex-end",
				marginRight: 40,
				marginTop: 20,
				padding: 8,
			}}
			onPress={onPress}
		>
			<Image source={nextIcon} style={{ height: 50, width: 50 }} />
		</RectButton>
	);
};

export default NextButton;
