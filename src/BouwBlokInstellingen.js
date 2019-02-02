import React, { Component } from 'react';
import BouwBlok from './BouwBlok';

export default class BouwBlokInstellingen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props)
        if (this.props.selected)
        {
            return (
                <p>
                    Position of selected blok: {this.props.selected.position.x}, 
                    {this.props.selected.position.y}
                </p>
            );
        }
        else {
            return (
                <p>
                    Nothing selected.
                </p>
            );
        }
    }
}