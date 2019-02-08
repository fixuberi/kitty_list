import React, { Component } from 'react';
import KittyListItem from './KittyListItem';

class KittyList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let items = this.props.items.map(el => {
            return (
                <KittyListItem  key={el.id} 
                                name={el.name} 
                                imageUrl={el.imageUrl} 
                                id={el.id}
                                onClick={this.props.onClick}
                />
            );
        });
        return <ul className='list'>{items}</ul>        
    }
}
export default KittyList;