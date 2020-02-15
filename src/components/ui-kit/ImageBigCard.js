import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { w } from '../../constants/screen'

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20
    },
    sub: {
        elevation: 10,
        shadowColor: '#000',
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 4,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center'
    },
    cover: {
        width: w / 1.67,
        height: w * 0.9,
        borderRadius: 10
    }
})
const ImageBigCard = ({ data }) => {
    const { container, sub, cover} = styles
    const { image} = data
    const img = `https${image.medium.slice(4)}`
    return (
      <View style={container}>
        <View style={sub}>
          <Image source={{ uri: img }} style={cover} />
        </View>
      </View>
    )
}

export { ImageBigCard }
