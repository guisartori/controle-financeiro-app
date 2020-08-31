import React from 'react'

import { LinearGradient } from 'expo-linear-gradient'

const LinearBg: React.FC = ({ children }) => {
	return (
		<LinearGradient
			colors={['#3A86FF', '#8338EC']}
			style={{
				position: 'absolute',
				left: 0,
				right: 0,
				top: 0,
				height: '100%',
			}}
		>
			{children}
		</LinearGradient>
	)
}

export default LinearBg