import React, { Component } from 'react';
import Home from './HomeComponent';
import Vehicles from './VehiclesComponent';
import VehicleInfo from './VehicleInfoComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

const VehiclesNavigator = createStackNavigator(
        {
            Vehicles: { screen: Vehicles },
            VehicleInfo: { screen: VehicleInfo }
        }, 
        {
            initialRouteName: 'Vehicles',
            defaultNavigationOptions: {
                headerStyle: {
                    backgroundColor: '#5637DD'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff'
                }
            }
        }
    );

    const HomeNavigator = createStackNavigator(
        {
            Home: { screen: Home }
        },
        {
            defaultNavigationOptions: {
                headerStyle: {
                    backgroundColor: '#5637DD'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff'
                }
            }
        }
    );
    
    const MainNavigator = createDrawerNavigator(
        {
            Home: { screen: HomeNavigator },
            Fleet: { screen: VehiclesNavigator }
        },
        {
            drawerBackgroundColor: '#CEC8FF'
        }
    );

const AppNavigator = createAppContainer(MainNavigator);


class Main extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
            }}>
                <AppNavigator />
            </View>
        );
    }
}

export default Main;