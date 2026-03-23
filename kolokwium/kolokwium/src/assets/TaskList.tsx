import React from 'react';
import TaskItem from './TaskItem';

interface TaskListProps {
    tasks: {
        id: number;
        title: string;
        done: boolean;
    }[];
    onToggleTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleTask }) => {
    if (tasks.length === 0) {
        return <p>Brak zadan</p>;
    }

    return (
        <ul>
            {tasks.map((task) => (
                <TaskItem 
                    key={task.id} 
                    id={task.id} 
                    title={task.title} 
                    done={task.done} 
                    onToggleDone={onToggleTask} 
                />
            ))}
        </ul>
    );
}

export default TaskList;
