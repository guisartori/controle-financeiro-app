import React from "react";

import { AppbarBottom, Fab } from "material-bread";
import { LinearGradient } from "expo-linear-gradient";
import { Text } from "react-native";

interface BottomAppBarProps {
	onFabPress: () => void;
}

const BottomAppBar: React.FC<BottomAppBarProps> = ({ onFabPress }) => {
	return (
		<AppbarBottom
			fab={
				<Fab backgroundColor={"black"} onPress={onFabPress}>
					<LinearGradient
						colors={["#FB5607", "#FF006E"]}
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							top: 0,
							height: "100%",
							borderRadius: 50,
						}}
					/>
					<Text
						style={{
							fontSize: 32,
							color: "#FFFFFF",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						+
					</Text>
				</Fab>
			}
			fabPosition={"center"}
			fabCutout
			style={{ marginTop: 16 }}
		/>
	);
};

export default BottomAppBar;
