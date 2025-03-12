import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];

  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
      async function fetchTasks() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        const data = await response.json();
        
        setTasks(data);

      }

      fetchTasks();
  }, []);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: true };
      }

      return task;
    });

    setTasks(newTasks);
  }

  function onDeleteClick(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function onTaskSubmit(title, description) {
    const newTask = {
      id: uuidv4(),
      title: title,
      description: description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-900 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-white font-bold text-center">
          Gerenciador de Tarefas
        </h1>

        <AddTask onTaskSubmit={onTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteClick={onDeleteClick}
        />
      </div>
    </div>
  );
}

export default App;
