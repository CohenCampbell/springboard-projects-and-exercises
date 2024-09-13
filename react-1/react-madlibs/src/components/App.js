import React, {useState} from "react";
import MadlibsForm from "./NewMadlibForm";
import Madlibs from "./Madlibs";


function App() {
  const initailState = {
    noun1: "",
    noun2: "",
    adjective: "",
    color: "",
    formSubmitted: false
}

const [formData, setFormData] = useState(initailState);

function onFormSubmit(e){
e.preventDefault()

setFormData(data => ({
  ...data,
  formSubmitted: true
}));
}


  return (
  
      
     <div className="App">
    
        
      {formData.formSubmitted 
      ? 
      <Madlibs formData={formData} setFormData={setFormData} initailState={initailState}/>
      :
      <MadlibsForm formData={formData} setFormData={setFormData} onFormSubmit={onFormSubmit}/>}
     
    </div>
  );
}

export default App;
