import './App.scss';
import React, { useState } from 'react';
import ShoppingListSidebar from './components/shopping-list-sidebar/shopping-list-sidebar';
import { ShoppingList as ShoppingListItem } from './interfaces/list';
import ShoppingListComponent from './components/shopping-list/shopping-list';
import CompletionListComponent from './components/completion-list/completion-list';
import Snackbar from '@mui/material/Snackbar';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';

function App() {
  const [shoppingItems, setShoppingItems] = useState<ShoppingListItem[]>([]);
  const [completedItems, setCompletedItems] = useState<string[]>([]);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [itemIdToRemove, setItemIdToRemove] = useState<number | null>(null);

  const handleAddItemToList = (itemName: string) => {
    console.log(`Adding item to the list: ${itemName}`)
    const newItem: ShoppingListItem = {
      completed: false,
      id: shoppingItems.length + 1,
      name: itemName,
      quantity: 1
    };
    
    setShoppingItems(prevItems => [...prevItems, newItem]);
  };

  const handleIncreaseQuantity = (itemId: number) => {
    setShoppingItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (itemId: number) => {
    const item = shoppingItems.find(item => item.id === itemId);
    if (item && item.quantity === 1) {
      setOpenDialog(true);
      setItemIdToRemove(itemId);
    } else {
      setShoppingItems(prevItems =>
        prevItems.map(item =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  const removeItem = (itemId: number) => {
    setShoppingItems(prevItems =>
      prevItems.filter(item => item.id !== itemId)
    );
    setOpenDialog(false);
  }

  const handleCompleteItem = (itemId: number, itemName: string) => {
    setCompletedItems(prevCompletedItems => [...prevCompletedItems, itemName]);
    setShoppingItems(prevItems =>
      prevItems.filter(item => item.id !== itemId)
    );
  };

  const handleActivateItem = (itemName: string) => {
    setCompletedItems(prevItems => prevItems.filter(item => item !== itemName));

    const activatedItem: ShoppingListItem = {
      id: shoppingItems.length + 1,
      name: itemName,
      quantity: 1,
      completed: false
    };
    setShoppingItems(prevItems => [...prevItems, activatedItem]);
  };

  return (
    <div className="wrapper">
      <div className="shopping-sidebar">
        <ShoppingListSidebar onAddItem={handleAddItemToList} />
      </div>
      <div className='shopping-wrapper'>
        <div className="shopping-list">
          <ShoppingListComponent
            items={shoppingItems}
            onIncreaseQuantity={handleIncreaseQuantity}
            onDecreaseQuantity={handleDecreaseQuantity}
            onRemoveItem={removeItem}
            onCompleteItem={handleCompleteItem}
          />
        </div>
        {completedItems.length > 0 && (
          <div className="completion-list">
            <CompletionListComponent
              completedItems={completedItems}
              onActivateItem={handleActivateItem}
            />
          </div>
        )}
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <div>
          <p>Decreasing quantity below 0 will remove the item. Are you sure?</p>
          <Button onClick={() => removeItem(itemIdToRemove!)}>Yes</Button>
          <Button onClick={() => setOpenDialog(false)}>No</Button>
        </div>
      </Dialog>
      </div>
    </div>
  );
}

export default App;