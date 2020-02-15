import { createStackNavigator } from 'react-navigation'
import HomeScreen from "./HomeScreen"
import DetailsScreen from "./DetailsScreen"

import {
    STAR_GATE_HOME,
    STAR_GATE_DETAILS
} from "../routes"


export default createStackNavigator(
    {
        [STAR_GATE_HOME]: HomeScreen,
        [STAR_GATE_DETAILS]: DetailsScreen
    },
    {
        headerMode: 'none'
    }

)
