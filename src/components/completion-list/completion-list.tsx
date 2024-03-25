import React from 'react';

interface CompletionListComponentProps {
    completedItems: string[];
    onActivateItem: (itemName: string) => void;
}

const CompletionListComponent: React.FC<CompletionListComponentProps> = ({ completedItems, onActivateItem }) => {
    const handleActivateItem = (itemName: string) => {
        onActivateItem(itemName);
    };

    return (
        <div>
            <h2>Completed Items</h2>
            <ul>
                {completedItems.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => handleActivateItem(item)}>Activate</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CompletionListComponent;