import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Nav from './Nav';
import Dog from './Dog';


function App() {
  const dogs = [
    {
      "name": "Whiskey",
      "age": 5,
      "src": "whiskey",
      "facts": [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      "name": "Duke",
      "age": 3,
      "src": "duke",
      "facts": [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      "name": "Perry",
      "age": 4,
      "src": "perry",
      "facts": [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    }
  ]

  
  return (
    <div className="App">
      <Nav dogs={dogs}/>
      <hr/>
      <Routes>
        <Route path='/' element={<div><h1>Welcome!</h1></div>}></Route>
        <Route path='dogs/:dog' element={<Dog dogs={dogs}/>}></Route>
        <Route path='*' element={<Navigate to={"/"}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
