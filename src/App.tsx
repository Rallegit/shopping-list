import './App.css';
import React, { useState } from 'react';
import ShoppingList from './components/shopping-list/shopping-list';
import ShoppingListSidebar from './components/shopping-list-sidebar/shopping-list-sidebar';
import { ShoppingList as ShoppingListItem } from './interfaces/list'; // Import the ShoppingList interface
import ShoppingListComponent from './components/shopping-list/shopping-list';
import CompletionListComponent from './components/completion-list/completion-list';

function App() {
  // State to manage the shopping list items
  const [shoppingItems, setShoppingItems] = useState<ShoppingListItem[]>([]);
  const [completedItems, setCompletedItems] = useState<string[]>([]);

  // Function to handle adding items to the shopping list
  const handleAddItemToList = (itemName: string) => {
    console.log(`Adding item to the list: ${itemName}`)
    // Create a new ShoppingListItem object
    const newItem: ShoppingListItem = {
      completed: false, // Assuming it's not completed by default
      id: shoppingItems.length + 1, // Assigning a unique ID (you might want to generate unique IDs differently)
      name: itemName,
      quantity: 1 // Assuming a default quantity of 1 for now
    };
    
    // Add the new item to the shopping list
    setShoppingItems(prevItems => [...prevItems, newItem]);
  };

  // Function to handle increasing the quantity of items
  const handleIncreaseQuantity = (itemId: number) => {
    setShoppingItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (itemId: number) => {
    setShoppingItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter(item => item.quantity > 0)
    );
  }

  const removeItem = (itemId: number) => {
    setShoppingItems(prevItems =>
      prevItems.filter(item => item.id !== itemId)
    );
  }

  const handleCompleteItem = (itemId: number, itemName: string) => {
    // Mark the item as completed and remove it from shoppingItems
    setCompletedItems(prevCompletedItems => [...prevCompletedItems, itemName]);
    setShoppingItems(prevItems =>
      prevItems.filter(item => item.id !== itemId)
    );
  };

  const handleActivateItem = (itemName: string) => {
    // Remove the item from the completedItems list
    setCompletedItems(prevItems => prevItems.filter(item => item !== itemName));
    
    // Create a new ShoppingList object for the activated item
    const activatedItem: ShoppingListItem = {
      id: shoppingItems.length + 1, // Assuming you have a function to generate unique IDs
      name: itemName,
      quantity: 1,
      completed: false
    };
  
    // Add the item back to the shoppingItems list
    setShoppingItems(prevItems => [...prevItems, activatedItem]);
  };

  return (
    <div className="wrapper">
      <div className="shopping-list-sidebar">
        {/* Pass the handleAddItemToList function as the onAddItem prop */}
        <ShoppingListSidebar onAddItem={handleAddItemToList} />
      </div>
      <div className="shopping-list">
        <ShoppingListComponent
          items = {shoppingItems} 
          onIncreaseQuantity = {handleIncreaseQuantity} 
          onDecreaseQuantity = {handleDecreaseQuantity}
          onRemoveItem = {removeItem}
          onCompleteItem={handleCompleteItem}
        />
      </div>
      <div className="completion-list">
        <CompletionListComponent completedItems={completedItems} onActivateItem={handleActivateItem} />
      </div>
    </div>
  );
}

export default App;