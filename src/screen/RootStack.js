import React from 'react'
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginComponent from '../Components/Logincomponent';
import SignUpComponent from '../Components/SignUpComponent';
import SwiperComponent from '../Components/SwiperComponent';


const StackNavigation=createStackNavigator({
    SwiperScreen:{
        screen:SwiperComponent,
        navigationOptions:{
            headerShown:false
        }
    },
    LoginScreen:{
        screen:LoginComponent,
        navigationOptions:{
            headerShown:false
        }
    },
    SignUpScreen:{
        screen:SignUpComponent,
        navigationOptions:{
            headerShown:false
        }
    }
})



export default createAppContainer(StackNavigation)