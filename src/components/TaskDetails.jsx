import { useSearchParams } from "react-router-dom";

function TaskDetails() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="w-screen h-screen bg-slate-500 rounded-md shdaow-2x1 flex flex-col">
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  );
}

export default TaskDetails;
