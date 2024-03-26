import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import './shopping-list-sidebar.scss';

interface ShoppingListSidebarProps {
    onAddItem: (item: string) => void;
}

const ShoppingListSidebar: React.FC<ShoppingListSidebarProps> = ({ onAddItem }) => {
    const [item, setItem] = useState('');

        useEffect(() => {
            const handleKeyPress = (event: KeyboardEvent) => {
                if (event.key === 'Enter' && item.trim() !== '') {
                    onAddItem(item);
                    setItem('');
                }
            };
            document.addEventListener('keydown', handleKeyPress);
            return () => {
                document.removeEventListener('keydown', handleKeyPress);
            };
        }, [item, onAddItem]);
    

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
        <div className='sidebar'>
            <h1>Shopping List</h1>
            <Input color="primary" type="text" value={item} onChange={handleInputChange} />
            <Button variant="contained" onClick={handleAddItem}>Add Item</Button>
        </div>
    );
};

export default ShoppingListSidebar;