import React, { Component } from 'react';

class SubmitButton extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button onClick={this.props.onSubmit}>Submit</button>
        );
    }
} 
export default SubmitButton;