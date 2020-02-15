import React, { Component } from 'react'
import { ScrollView, Button, StyleSheet, View, Text } from 'react-native'
import { Header, ImageBigCard } from '../components/ui-kit'
import { STAR_GATE_HOME } from '../routes'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  sub: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 150,
    backgroundColor: '#fff'
  },
  h1: {
    fontSize: 30,
    padding: 15,
    textAlign: 'center'
  },
  h2: {
    fontSize: 15,
    padding: 15,
    paddingHorizontal: 15,
    color: 'grey',
    lineHeight: 20,
    fontFamily: 'Roboto',
    textAlign: 'center'
  }
})

export default class DetailsScreen extends Component {
  componentWillUnmount() {
    const { onGoBack } = this.props.navigation.state.params
    onGoBack && onGoBack('Hello')
  }

  render() {
    const { navigation } = this.props
    const { image, name, summary } = this.props.navigation.state.params
    const { container, h1, h2, sub } = styles
    const data = { image, name }
    return (
      <View style={container}>
        <Header detail title={name} onPress={() => navigation.goBack()} leftIcon="ios-arrow-back" leftColor="#fff" />
        <ScrollView>
          <View style={sub}>
            <ImageBigCard data={data} />
            <Button title="Click here" onPress={() => navigation.navigate(STAR_GATE_HOME)} />
            <Text style={h1}>{name.toUpperCase()}</Text>
            <Text style={h2}>{summary.replace(/<[^>]+>/g, '')}</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}
