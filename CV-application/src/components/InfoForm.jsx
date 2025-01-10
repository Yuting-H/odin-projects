import "../styles/panel.css";
import "../styles/infoForm.css";
import Input from "./Input";

function InfoForm() {
  return (
    <>
      <div className="infoForm panel">
        This is where the user inputs inforamtions
        <Input />
      </div>
    </>
  );
}

export default InfoForm;
