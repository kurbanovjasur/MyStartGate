import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { Header, ImageCard,Layout } from '../components/ui-kit'
import { SPIDER_MAN_DETAILS } from "../routes"

const URL = 'http://api.tvmaze.com/search/shows?q=spider-man'

export default class HomeScreen extends Component {
    // eslint-disable-next-line react/state-in-constructor
    state = {
        title: 'SPIDER MAN',
        data: []
    }

    componentDidMount = async () => {
        // eslint-disable-next-line no-useless-catch
        try {
            const response = await fetch(URL)
            const data = await response.json()
            this.setState({ data })
        } catch (e) {
            throw e
        }
    }

    render() {
        const { title, data } = this.state
        const { navigation } = this.props
        return (
          <View>
            <Header title={title} leftIcon="ios-menu" leftColor="white" onPress={()=> navigation.openDrawer()} />
            <ScrollView>
              <Layout>
                {data.map((item) => {
                                return (
                                  <ImageCard
                                    data={item.show}
                                    key={item.show.id}
                                    onPress={()=> navigation.navigate(SPIDER_MAN_DETAILS, (item.show))}
                                  />
                                )
                            }
                        )}
              </Layout>
            </ScrollView>
          </View>
        )
    }
}




