import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { VEHICLES } from '../shared/vehicles';

class Vehicles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicles: VEHICLES
        };
    }

    static navigationOptions = {
        title: 'Vehicles'
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderVehiclesItem = ({ item }) => {
            return (
                <ListItem bottomDivider onPress={() => navigate('VehicleInfo', { vehicleId: item.id })}>
                    <Avatar source={require('./images/vitz.jpg')} />
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.description}</ListItem.Subtitle>

                </ListItem>
            );
        };

        return (
            <FlatList
                data={this.state.vehicles}
                renderItem={renderVehiclesItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Vehicles;