import React from 'react';
import './App.css';
import Jumbotron from './components/Jumbotron';
import TableHtml from "./components/TableHtml";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
<Jumbotron />
<SearchBar />
      <TableHtml/>
    </div>
  );
}

export default App;