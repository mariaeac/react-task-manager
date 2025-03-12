import { ListCollapse, Trash2 } from "lucide-react";

function Tasks({ tasks, onTaskClick, onDeleteClick }) {
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
            <button className="bg-slate-800 text-white p-2  rounded-md">
              <ListCollapse />
            </button>

            <button
              onClick={() => onDeleteClick(task.id)}
              className="bg-slate-800 text-white p-2  rounded-md"
            >
              <Trash2 />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
