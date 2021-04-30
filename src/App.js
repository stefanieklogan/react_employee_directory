import React from 'react';
import './App.css';
import Jumbotron from './components/Jumbotron';
import TableData from "./components/TableData";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <Jumbotron />
      <SearchBar />
      <TableData />
    </div>
  );

}

export default App;