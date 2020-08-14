import React from 'react';
import { ChromePicker } from 'react-color';

export default class ColorPickerView extends React.Component {
    state = {
        color: {'r':0,'g':0,'b':0,'a':1},
    };
    handleChangeComplete = (color) => {
        console.log(color);
        this.setState({ color: color.rgb });
    };
    handleChange = (color, event) => {
        console.log(color);
        this.setState({ color: color.rgb });
    };
    render() {
        return <ChromePicker 
            color={ this.state.background }
            onChange={ this.handleChange }
            onChangeComplete={ this.handleChangeComplete }
        />;
    }
}