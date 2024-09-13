import React, {useState} from 'react'
import NewColorForm from './NewColorForm';
import Home from './Home';
import { Route, Routes, Navigate } from 'react-router-dom';
import Color from './Color';


function App() {
  const [colors, setColors] = useState(["fuchsia", "chartreuse", "turquoise"])

  return (
    <div className="App">
     <Routes>
      <Route path={"/"} element={<Home colors={colors}/>}/>
      <Route path={"/form"} element={<NewColorForm setColors={setColors}/>}/>
      <Route path={"/colors/:color"} element={<Color colors={colors}/>}/>
      <Route path={"*"} element={<Navigate to={"/"}/>}/>
     </Routes>
    </div>
  );
}

export default App;
