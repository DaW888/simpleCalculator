import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class Display extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.back} style={styles.container}>
                <View style={styles.operations}>
                    <Text style={{fontSize: 30, fontFamily: 'Roboto', color: 'white'}}>{this.props.displayString}</Text>
                </View>
                <View style={styles.sum}>
                    <Text style={{fontSize: 20, fontFamily: 'Roboto', color: 'white'}} >{this.props.sum}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4b3587',
        flex: 1,
        flexDirection: 'column',
    },

    operations: {
        flex: 5,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    sum: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'flex-end'
    }

});

export default Display;