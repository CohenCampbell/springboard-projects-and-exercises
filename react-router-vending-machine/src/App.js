import React from "react";
import Vending from "./Components/Vending";
import Drink from "./Components/Drink";
import HotSoup from "./Components/HotSoup";
import Mackerel from "./Components/Mackerel";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Vending/>}></Route>
      <Route path="/drink" element={<Drink/>}></Route>
      <Route path="/hotsoup" element={<HotSoup/>}></Route>
      <Route path="/mackerel" element={<Mackerel/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
