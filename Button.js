import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

class Button extends Component {
    styles = StyleSheet.create({
       button: {
           backgroundColor: this.props.bcColor,
           height: this.props.height,
           width: this.props.width,
           justifyContent: 'center',
           alignItems: 'center'
       },
       buttonText: {
           fontFamily: 'Roboto',
           fontSize: 42,
           color: 'white'
       }
    });

    press = () => {
        this.props.pressButton(this.props.text)
    };

    render() {
        return (
            <TouchableOpacity style={this.styles.button} onPress={this.press}>
                <Text style={this.styles.buttonText}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}

export default Button;

