import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Button from "./Button";

class Buttons extends Component {

    getNum = () => this.props.numButtons.map(({text}) =>
        <Button pressButton={this.props.pressButton} text={text} width="33%" height="25%" bcColor="#141414" key={text}/>
    );

    getOper = () => this.props.operButtons.map(({text}) =>
        <Button pressButton={this.props.pressButton} text={text} width="100%" height="20%" bcColor="#1B1B36" key={text + 1}/>
    );

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.numButtons}>
                    {this.getNum()}
                </View>
                <View style={styles.operButtons}>
                    {this.getOper()}
                </View>
            </View>
        );
    }
}

export default Buttons;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#181d24',
        flex: 3,
        flexDirection: 'row',
    },
    numButtons: {
        flex: 4,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    operButtons: {
        flex: 1,
    }
});