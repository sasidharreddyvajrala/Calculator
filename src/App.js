import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Input from './components/Input';
import Boxes from './components/Boxes';

class App extends Component {
  state = {
    calculator: [
      [7, 8, 9, '/'],
      [4, 5, 6, '-'],
      [1, 2, 3, '+','*'],
      [0, '.', '=', 'clr']
    ],
    firstValue: '',
    secondValue: '',
    selectedSymbol: '',
    result: ''
  }

  handlePress = (item) => {
      if(typeof(item) === 'number'){
        let value = (this.state.firstValue * 10) + item;
        return (
          this.setState({
            firstValue: value
          })
        )
      }
      if(typeof(item) === 'string' && item !== '=' && item !== 'clr'){
        return (
          this.setState({
            selectedSymbol: item,
            secondValue: this.state.firstValue,
            firstValue: ''
          })
        )
      }
      if(item === '='){
        const result = eval(this.state.secondValue + this.state.selectedSymbol + this.state.firstValue);
        return (
          this.setState({
            result,
            firstValue: '',
            secondValue: '',
            selectedSymbol: ''
          })
        )
      }
      if(item === 'clr'){
        return (
          this.setState({
            result: '',
            firstValue: '',
            secondValue: '',
            selectedSymbol: ''
          })
        )
      }
  }

  handleDisplay = () => {
    const { calculator } = this.state;
    const some = calculator.map(row => {
      return row.map(item => {
        return (
            <Boxes
              text={item}
              key={item}
              onPress={() => this.handlePress(item)}
            />
        )
      });
    });

    return some;
  }

  render() {
    const { containerStyle, topViewStyle, bottomViewStyle } = styles;
    return (
      <View style={containerStyle}>
        <View style={topViewStyle}>
        <Input>{this.state.secondValue}{this.state.selectedSymbol}{this.state.firstValue}{this.state.result}</Input>
        </View>
        <View style={bottomViewStyle}>
          {this.handleDisplay()}
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1
  },
  topViewStyle: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  bottomViewStyle: {
    flex: 8,
    backgroundColor: '#D3D3D3',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

export default App;