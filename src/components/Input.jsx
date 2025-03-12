function Input(props) {
  return (
    <input
      className="border-slate-300 bg-slate-800 text-white font-bold outline-slate-400 px-4 py-2 rounded-md"
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    ></input>
  );
}

export default Input;
