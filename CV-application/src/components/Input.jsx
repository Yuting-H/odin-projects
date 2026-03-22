function Input({ setValue }) {
  return (
    <>
      <input
        type="type"
        onChange={() => {
          setValue(event.target.value);
        }}></input>
    </>
  );
}

export default Input;
