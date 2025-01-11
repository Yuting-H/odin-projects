import InfoForm from "./components/infoForm";
import GeneratedCV from "./components/GeneratedCV";
import { useState } from "react";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "Firstname M Lastname",
    email: "example@org.com",
    phone: "+1 123 456 7890",
  });
  return (
    <>
      <h1>{personalInfo}</h1>
    </>
  );
}

export default App;
