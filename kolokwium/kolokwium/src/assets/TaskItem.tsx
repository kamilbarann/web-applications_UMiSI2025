import React from 'react';

interface TaskItemProps {
    id: number;
    title: string;
    done: boolean;
    onToggleDone: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ id, title, done, onToggleDone }) => {
    return (
        <li>
            <input
                type="checkbox"
                checked={done}
                onChange={() => onToggleDone(id)}
            />
            <span style={{ textDecoration: done ? 'line-through' : 'none' }}>
                {title}
            </span>
        </li>
    );
}

export default TaskItem;


