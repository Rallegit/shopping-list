import React from 'react';
import { ShoppingList } from '../../interfaces/list';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import './shopping-list.scss';

interface ShoppingListComponentProps {
    items: ShoppingList[];
    onIncreaseQuantity: (itemId: number) => void;
    onDecreaseQuantity: (itemId: number) => void;
    onRemoveItem: (itemId: number) => void;
    onCompleteItem: (itemId: number, itemName: string) => void;
}

const ShoppingListComponent: React.FC<ShoppingListComponentProps> = ({ items, onIncreaseQuantity, onDecreaseQuantity, onRemoveItem, onCompleteItem }) => {
    return (
        <div className='cards'>
            {items.map((item) => (
                <Card key={item.id} className="shopping-card">
                    <h2>{item.name}</h2>
                    <List>
                        <section>
                            <h3>Quantity: {item.quantity}</h3>
                            <div className="increment-buttons">
                                <Button variant="contained" onClick={() => onIncreaseQuantity(item.id)}>+</Button>
                                <Button variant="contained" onClick={() => onDecreaseQuantity(item.id)}>-</Button>
                            </div>
                            <div className="status">
                                <Button variant="contained" onClick={() => onRemoveItem(item.id)}>Remove</Button>
                                <Button variant="contained" onClick={() => onCompleteItem(item.id, item.name)}>Complete</Button>
                            </div>
                        </section>
                    </List>
                </Card>
            ))}
        </div>
    );
};

export default ShoppingListComponent;