import { createStackNavigator } from 'react-navigation'
import HomeScreen from "./HomeScreen"
import DetailsScreen from "./DetailsScreen"
import StargateHomeScreen from "../screen1/HomeScreen"
import {
    SPIDER_MAN_HOME,
    SPIDER_MAN_DETAILS,
    STAR_GATE_HOME
} from "../routes"


export default createStackNavigator(
    {
        [SPIDER_MAN_HOME]: HomeScreen,
        [STAR_GATE_HOME]: StargateHomeScreen,
        [SPIDER_MAN_DETAILS]: DetailsScreen
    },
    {
        headerMode: 'none'
    }

)
