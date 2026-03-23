
import { useState, useEffect } from 'react';
import AddTask from './assets/AddTask';
import TaskList from './assets/TaskList';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

const domyslna: Task[] = [
  { id: 1, title: "Nauczyc sie Reacta", done: false },
  { id: 2, title: "Zaliczyc kolokwium", done: false }
];

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : domyslna;
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    const completedCount = tasks.filter(task => task.done).length;
    console.log(`Liczba wykonanych zadan: ${completedCount}`);
  }, [tasks]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      title,
      done: false
    };
    setTasks([...tasks, newTask]);
  }

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, done: !task.done } : task
    ));
  }
  return (
    <div>
      <h1>Lista zadan</h1>
      <AddTask onAddTask={addTask} />
      <TaskList tasks={tasks} onToggleTask={toggleTask} />
    </div>
  );
}

export default App;
