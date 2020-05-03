import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function BaseGradient({ style, children }) {
	return (
		<LinearGradient
			colors={["#fe520e", "#f16605", "#ef6903"]}
			start={{ x: 0.1, y: 0 }}
			end={{ x: 1, y: 0.1 }}
			style={style}
		>
			{children}
		</LinearGradient>
	);
}
