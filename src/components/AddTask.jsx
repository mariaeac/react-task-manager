import { useState } from "react";
import Input from "./Input";

function AddTask({ onTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="mt-6 space-y-4 p-8 bg-slate-500 rounded-md shdaow-2x1 flex flex-col">
      <Input
        type="text"
        placeholder="Titulo da tarefa"
        value={title}
        onChange={() => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Descrição da tarefa"
        value={description}
        onChange={() => setDescription(event.target.value)}
       />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o título e descrição da tarefa");
          }

          onTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="border-slate-300 bg-slate-800 text-white font-bold outline-slate-400 px-4 py-2 rounded-md"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
