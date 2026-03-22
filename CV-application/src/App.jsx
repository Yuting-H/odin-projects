import Button from "./components/Button";
import Input from "./components/Input";
import { useState } from "react";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "Firstname M Lastname",
    email: "example@org.com",
    phone: "+1 123 456 7890",
  });

  const setName = (newName) => {
    setPersonalInfo({
      name: newName,
      ...personalInfo,
    });
  };
  return (
    <>
      <h1>{personalInfo.name}</h1>
      <Input
        setValue={(prev) => {
          setPersonalInfo({
            name: prev.target.value,
            ...prev,
          });
        }}></Input>
    </>
  );
}

export default App;
