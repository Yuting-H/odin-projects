import { useState } from "react";
import Input from "../../components/Input";

function CV() {
  const [info, setInfo] = useState({
    name: { first: "", last: "" },
  });

  const handleLastName = (newValue) => {
    setInfo((prev) => ({
      ...prev,
      name: {
        ...prev.name, // Keep the first name
        last: newValue,
      },
    }));
  };

  return (
    <div className="grid grid-cols-2 h-lvh bg-slate-50">
      <div className="">
        form
        <Input value={info.name.last} handleChange={handleLastName}></Input>
      </div>
      <div id="output" className="">
        <p>{info.name.first}</p>
        <p>{info.name.last}</p>
      </div>
    </div>
  );
}

export default CV;
