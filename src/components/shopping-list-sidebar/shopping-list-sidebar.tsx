import React, { useState } from 'react';

interface ShoppingListSidebarProps {
    onAddItem: (item: string) => void;
}

const ShoppingListSidebar: React.FC<ShoppingListSidebarProps> = ({ onAddItem }) => {
    const [item, setItem] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setItem(event.target.value);
    };

    const handleAddItem = () => {
        if (item.trim() !== '') {
            onAddItem(item);
            setItem('');
        }
    };

    return (
        <div>
            <h2>Shopping List Sidebar</h2>
            <input type="text" value={item} onChange={handleInputChange} />
            <button onClick={handleAddItem}>Add Item</button>
        </div>
    );
};

export default ShoppingListSidebar;