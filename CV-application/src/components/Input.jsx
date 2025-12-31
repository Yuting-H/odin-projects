function Input({ value, handleChange }) {
  return (
    <input
      className="border rounded-lg p-1 border-slate-500 bg-slate-100 "
      value={value}
      onChange={(e) => {
        handleChange(e.target.value);
      }}
    ></input>
  );
}

export default Input;
