import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Fazer as compras da semana",
      description: "Fazer as compras da semana no supermercado",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Levar o gato para o veterinário",
      description: "Levar o gato para cortas as unhas no veterinário",
      isCompleted: false,
    },
  ]);

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

  return (
    <div className="w-screen h-screen bg-slate-900 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-white font-bold text-center">
          Gerenciador de Tarefas
        </h1>

        <AddTask />
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
