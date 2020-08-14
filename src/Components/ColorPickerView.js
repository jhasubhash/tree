import React from 'react';
import { ChromePicker } from 'react-color';

export default class ColorPickerView extends React.Component {
    state = {
        //color: {'r':0,'g':0,'b':0,'a':1},
        color: this.props.color,
    };

    handleChangeComplete = (color) => {
        this.props.setColor(color.hex);
        this.setState({ color: color.hex });
    };

    handleChange = (color, event) => {
        this.props.setColor(color.hex);
        this.setState({ color: color.hex });
    };

    render() {
        return <ChromePicker 
            color={ this.state.color }
            onChange={ this.handleChange }
            onChangeComplete={ this.handleChangeComplete }
        />;
    }
}