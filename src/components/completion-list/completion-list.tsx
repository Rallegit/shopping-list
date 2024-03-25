import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import './completion-list.scss';

interface CompletionListComponentProps {
    completedItems: string[];
    onActivateItem: (itemName: string) => void;
}

const CompletionListComponent: React.FC<CompletionListComponentProps> = ({ completedItems, onActivateItem }) => {
    const handleActivateItem = (itemName: string) => {
        onActivateItem(itemName);
    };

    return (
        <div className="completion-wrapper">
            <div className='completed'>
                {completedItems.map((item, index) => (
                    <Card key={index}>
                        {item}
                        <Button variant="contained" onClick={() => handleActivateItem(item)}>Activate</Button>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default CompletionListComponent;