import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { w } from '../../constants/screen'

const styles = StyleSheet.create({
  container: {
    width: w / 2.4,
    paddingVertical: 10
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
    width: w / 2.4,
    height: w * 0.63,
    borderRadius: 10
  },
  h1: {
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    width: w / 2.4,
    paddingTop: 10
  }
})
const ImageCard = ({ data, onPress }) => {
  const { container, sub, cover, h1 } = styles
  const { image, name } = data
  const img = `https${image.medium.slice(4)}`
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={container}>
        <View style={sub}>
          <Image source={{ uri: img }} style={cover} />
        </View>
        <Text style={h1}>{name.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  )
}

export { ImageCard }
