import React, { Component } from 'react';

class KittyListItem extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick(ev) {
        let currItem  = ev.currentTarget;
        let classList = currItem.classList.value;
        let itemId    = currItem.attributes['data-id'].value;

        if(classList.match(/selected/)) {
            currItem.classList.value = classList.replace(/selected/, '');
        } else currItem.classList.value = classList.concat(' selected');
        this.props.onClick(itemId);
    }
    render() {
        return (
            <li className="item" data-id={this.props.id} onClick={this.onClick}>
                <h3 className="name">{this.props.name}</h3>
                <img className="image" src={this.props.imageUrl} alt={this.props.name} />
            </li>
        );
    }
}
export default KittyListItem;