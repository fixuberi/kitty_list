import React, { Component } from 'react';
import KittyList from './KittyList';
import SubmitButton from './SubmitButton';

class KittyForm extends Component {
    constructor(props) {
        super(props);
        this.selectedItems = [];
        this.onSubmit = this.onSubmit.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    onClick(itemId) {
        let indexOfItemId = this.selectedItems.indexOf(itemId);
        if(indexOfItemId < 0) {
            this.selectedItems.push(itemId);
        } else {
            this.selectedItems.splice(indexOfItemId, 1);
        }
    }
    onSubmit() {
        alert(this.selectedItems);
    }
    render() {
        return (
            <div className="form">
                <KittyList items={this.props.items} onClick={this.onClick}/>
                <SubmitButton onSubmit={this.onSubmit} />
            </div>
        );
    }
}
export default KittyForm;