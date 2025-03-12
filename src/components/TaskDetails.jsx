import { useNavigate, useSearchParams } from "react-router-dom";
import AddTask from "./AddTask";
import { ChevronLeftIcon } from "lucide-react";

function TaskDetails() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="w-screen h-screen bg-slate-800 p-6 flex justify-center items-cente">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 bottom-0 top-0 text-slate-50"
          >
            {" "}
            <ChevronLeftIcon />{" "}
          </button>
        </div>
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Detalhes da tarefa
        </h1>

        <div className="bg-slate-400 p-4 rounded-md">
          <h2 className="text-xl text-white font-bold"> {title}</h2>
          <h2 className="text-white"> {description}</h2>
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;
