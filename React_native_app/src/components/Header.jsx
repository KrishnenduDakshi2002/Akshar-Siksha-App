import React from 'react';

import {
  Text,
  View,
  Pressable
} from 'react-native';


const Header = ({ title = "header" }) => (
	<View style={{ marginHorizontal: 16, marginVertical: 10,flexDirection:"row",justifyContent:"space-between" }}>
		<Text style={{ fontSize: 16 }}>{title}</Text>
		{/* <Pressable style={{backgroundColor: '#28800b', borderRadius: 4,padding:6}}>
			<Text style={{color:"white"}}>Classrooms</Text>
		</Pressable> */}
	</View>
);

export default Header;
