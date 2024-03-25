import React from 'react';
import { ShoppingList } from '../../interfaces/list';

interface ShoppingListComponentProps {
    items: ShoppingList[];
    onIncreaseQuantity: (itemId: number) => void;
    onDecreaseQuantity: (itemId: number) => void;
    onRemoveItem: (itemId: number) => void;
    onCompleteItem: (itemId: number, itemName: string) => void;
}

const ShoppingListComponent: React.FC<ShoppingListComponentProps> = ({ items, onIncreaseQuantity, onDecreaseQuantity, onRemoveItem, onCompleteItem }) => {
    return (
        <div>
            <h2>Shopping List</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <div>
                            <strong>Name:</strong> {item.name}
                        </div>
                        <div>
                            <strong>Quantity:</strong> {item.quantity}
                            {/* Button to increase quantity */}
                            <button onClick={() => onIncreaseQuantity(item.id)}>+</button>
                            {/* Button to decrease quantity */}
                            <button onClick={() => onDecreaseQuantity(item.id)}>-</button>
                            {/* Button to remove item */}
                            <button onClick={() => onRemoveItem(item.id)}>Remove</button>
                            {/* Button to mark item as completed */}
                            <button onClick={() => onCompleteItem(item.id, item.name)}>Complete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingListComponent;