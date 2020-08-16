import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";
import YieldOrExpense from "../pages/YieldOrExpense";
import ExpenseValue from "../pages/ExpenseValue";
import ExpenseOrigin from "../pages/ExpenseOrigin";
import YieldValue from "../pages/YieldValue";
import YieldOrigin from "../pages/YieldOrigin";

export default function AppStack() {
	const { Navigator, Screen } = createStackNavigator();

	return (
		<NavigationContainer>
			<Navigator>
				<Screen
					name="Home"
					component={Home}
					options={{
						title: "Controle financeiro",
						headerStyle: {
							backgroundColor: "#FFBE0B",
						},
						headerTitleStyle: {
							textAlign: "center",
						},
					}}
				/>
				<Screen
					name="YieldOrExpense"
					component={YieldOrExpense}
					options={{
						headerShown: false,
					}}
				/>
				<Screen
					name="ExpenseValue"
					component={ExpenseValue}
					options={{
						headerShown: false,
					}}
				/>
				<Screen
					name="ExpenseOrigin"
					component={ExpenseOrigin}
					options={{
						headerShown: false,
					}}
				/>
				<Screen
					name="YieldValue"
					component={YieldValue}
					options={{
						headerShown: false,
					}}
				/>
				<Screen
					name="YieldOrigin"
					component={YieldOrigin}
					options={{
						headerShown: false,
					}}
				/>
			</Navigator>
		</NavigationContainer>
	);
}
