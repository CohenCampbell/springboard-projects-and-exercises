import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import AddItemForm from "./AddItemForm";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getSnacks() {
      let s = await SnackOrBoozeApi.getSnacks();
      let d = await SnackOrBoozeApi.getDrinks();
      setSnacks(s);
      setDrinks(d);
      setIsLoading(false);
    }
    getSnacks();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home items={[snacks, drinks]} />} />
            <Route path="/snacks" element={<Menu snacks={snacks} title="Snacks" />} />
            <Route path="/snacks/:id" element={<MenuItem items={snacks} cantFind="/snacks" />} />
            <Route path="/drinks" element={<Menu drinks={drinks} title="Drinks" />} />
            <Route path="/drinks/:id" element={<MenuItem items={drinks} cantFind="/drinks" />} />
            <Route path="add" element={<AddItemForm postItem={SnackOrBoozeApi.postItem}/>}/>
            <Route path="*" element={<p>Hmmm. I can't seem to find what you want.</p>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
