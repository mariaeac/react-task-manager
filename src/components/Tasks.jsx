import { ListCollapse, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteClick }) {
  const navigate = useNavigate();

  function onDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task-details?${query.toString()}`);
  }

  return (
    <div className="pt-10">
      <ul className="space-y-4 p-8 bg-slate-500 rounded-md shadow-2xl">
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`bg-slate-800 text-white text-left p-2 rounded-md w-full ${
                task.isCompleted && "line-through"
              }`}
            >
              {task.title}
            </button>

            <Button onClick={() => onDetailsClick(task)}>
              <ListCollapse />
            </Button>

            <Button
              onClick={() => onDeleteClick(task.id)}>
              <Trash2 />
            </Button>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
