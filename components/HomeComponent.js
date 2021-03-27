import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import CarouselCards from './CarouselCards';
import { VEHICLES } from '../shared/vehicles';
import { PROMOTIONS } from '../shared/promotions';
import { PARTNERS } from '../shared/partners';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

function RenderItem({ item }) {
    if (item) {
        return (
            <Card>
                <Card.Image source={{ uri: item.image }}></Card.Image>
                <Text style={styles.container}>{item.name}</Text>
                <Text>{item.description}</Text>
            </Card>
        );
    }
    return <View />;
}

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            vehicles: VEHICLES,
            promotions: PROMOTIONS,
            partners: PARTNERS,
        };
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <CarouselCards />
                <RenderItem
                    item={this.state.vehicles.filter(vehicle => vehicle.featured)[0]}
                />
                <RenderItem
                    item={this.state.partners.filter(partner => partner.featured)[0]}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    htext: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        width: 500,
        height: 250,
        paddingTop: 100,
        textShadowColor: 'rgba(0, 0.5, 0.5, 0.9)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
    container: {
        textAlign: "center",
        justifyContent: "center",
        marginTop: 10,
        fontWeight: "bold",
        fontSize: 20,
    },
    carouselimg: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50
    },


});

export default Home;