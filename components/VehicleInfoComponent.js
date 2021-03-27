import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import Slider from './Slider';
import { VEHICLES } from '../shared/vehicles';

const { width } = Dimensions.get('window')

function RenderVehicle({ vehicle }) {
    if (vehicle) {
        return (
            <ScrollView style={styles.cardView}>
                <Text style={styles.itemTitle}>{vehicle.year} {vehicle.name} {vehicle.model}</Text>
                <Slider />
                <View style={styles.textView}>
                    <Text style={styles.itemSubTitle}>{vehicle.model}</Text>
                    <Text style={styles.ItemDescription}>{vehicle.description}</Text>
                </View>
                <Card>
                    <Card.Title>Vehicle Details</Card.Title>
                    <Card.Divider/>
                    <View style={styles.textView}>
                        <Text style={styles.ItemDescription}>VIN: {vehicle.vin}</Text>
                        <Text style={styles.ItemDescription}>Make: {vehicle.name}</Text>
                        <Text style={styles.ItemDescription}>Model: {vehicle.model}</Text>
                        <Text style={styles.ItemDescription}>Year: {vehicle.year}</Text>
                        <Text style={styles.ItemDescription}>Exterior Color: {vehicle.exteriorcolor}</Text>
                        <Text style={styles.ItemDescription}>Interior Color: {vehicle.interiorcolor}</Text>
                        <Text style={styles.ItemDescription}>Mileage: {vehicle.mileage}</Text>
                        <Text style={styles.ItemDescription}>Engine: {vehicle.engine}</Text>
                        <Text style={styles.ItemDescription}>Transmission: {vehicle.transmission}</Text>
                        <Text style={styles.ItemDescription}>Country of Origin: {vehicle.country}</Text>
                        <Text style={styles.ItemDescription}>Status: {vehicle.status}</Text>


                    </View>
                </Card>
            </ScrollView>
        );
    }
    return <View />;
}

class VehicleInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicles: VEHICLES
        };
    }

    static navigationOptions = {
        title: 'Vehicle Information'
    }

    render() {
        const vehicleId = this.props.navigation.getParam('vehicleId');
        const vehicle = this.state.vehicles.filter(vehicle => vehicle.id === vehicleId)[0];
        return <RenderVehicle vehicle={vehicle} />
    }

}

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        width: width - 2,
        backgroundColor: "white",
    },
    textView: {
        marginTop: 2,
        margin: 10,
        left: 5,
    },
    image: {
        width: width,
        height: 300,
    },
    itemTitle: {
        color: 'red',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center'
    },
    itemSubTitle: {
        color: 'black',
        fontSize: 19,
        fontWeight: 'bold',
    },
    ItemDescription: {
        color: 'black',
        fontSize: 12,
        marginTop: 5,
    }
});

export default VehicleInfo;