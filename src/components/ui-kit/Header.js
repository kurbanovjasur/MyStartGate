import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { w } from '../../constants/screen'

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
        backgroundColor: '#30d0fe',
        height: 116,
        paddingTop: 71,
        elevation: 8,
        position: 'relative'
    },
    textStyle: {
        color: '#fff',
        fontSize: 28,
        width: w-40,
        fontWeight: 'bold'
    },
    leftButtonStyle:{
        fontSize: 35
    }
})

const Header = ({title, detail, onPress, leftIcon,leftColor}) => {
    const { viewStyle, textStyle, leftButtonStyle } = styles
    return (
      <View style={viewStyle}>
        <TouchableOpacity onPress={onPress}>
          <Ionicons name={leftIcon} style={[leftButtonStyle, { paddingLeft: detail ? 10 : 15 }]} color={leftColor} />
        </TouchableOpacity>
        <Text numberOfLines={1} ellipsizeMode="tail" style={[textStyle, { paddingLeft: leftIcon ? 10 : 0 }]}>{title}</Text>
      </View>
    )
}


export { Header }
