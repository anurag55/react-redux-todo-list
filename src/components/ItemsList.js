import React from 'react'
import { connect } from 'react-redux'
import { updateItem, deleteItem } from '../actions'
import Item from './Item';

const ItemsList = ({ items, updateItem, deleteItem }) => (
    <ul className={'item-list'}>
        {items.map(item => (
            <div className='item-block'>
                <Item key={ item.id } {...item} onClick={() => updateItem(item.id)}/>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
            </div>
        ))}
    </ul>
)

const mapStateToProps = state => ({
    items: state.items
})

const mapDispatchToProps = dispatch => ({
    updateItem: id => dispatch(updateItem(id)),
    deleteItem: id => dispatch(deleteItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList)