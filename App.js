import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Buttons from "./Buttons";
import Display from "./Display";

class App extends Component {
    state = {
        buttonsNum: [
            {text: '1'},
            {text: '2'},
            {text: '3'},
            {text: '4'},
            {text: '5'},
            {text: '6'},
            {text: '7'},
            {text: '8'},
            {text: '9'},
            {text: '.'},
            {text: '0'},
            {text: '='},

        ],
        buttonsOperation: [
            {text: 'C'},
            {text: '/'},
            {text: '*'},
            {text: '-'},
            {text: '+'},
        ],
        displayString: '',
        sum: ''
    }

    pressButton = (text) => {
        if (text !== 'C' && text !== '=') {

            if(!['/', '*', '-', '+', '.'].includes(text) && !this.state.displayString){
                this.setState({
                    displayString: this.state.displayString + text,
                });
            } else if (this.state.displayString) {
                const last = this.state.displayString.substr(-1);
                if (last == text && ['/', '*', '-', '+', '.'].includes(text)) {
                    console.log('click same sign!');
                } else if (['/', '*', '-', '+', '.'].includes(last) && ['/', '*', '-', '+', '.'].includes(text)) {
                    console.log('tez nie mozna');
                } else {
                    this.setState({
                        displayString: this.state.displayString + text,
                    });
                }

            }

        } else if (text === '=') {
            this.setState({
                sum: eval(this.state.displayString)
            })
        } else if (text === 'C') {
            this.setState({
                sum: '',
                displayString: ''
            })
        }
    }

    back = () => {
        let str = this.state.displayString;
        this.setState({
            displayString: str.substring(0, str.length - 1)
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Display back={this.back} displayString={this.state.displayString} sum={this.state.sum}/>
                <Buttons numButtons={this.state.buttonsNum} operButtons={this.state.buttonsOperation}
                         pressButton={this.pressButton}/>
            </View>
        );
    }
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column'
    },
});
