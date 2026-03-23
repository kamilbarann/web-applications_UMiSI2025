
import { useState } from 'react'

interface AddTaskProps {
  onAddTask: (title: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');

  const handleAddTask = () => {
    if (title.trim() === '') return;
    onAddTask(title);
    setTitle('');
  }
    return (
        <div>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Wpisz nowe zadanie"
            />
            <button onClick={handleAddTask}>Dodaj</button>
        </div>
    );
}

export default AddTask;