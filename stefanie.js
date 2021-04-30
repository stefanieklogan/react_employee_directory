import React, { useState, useEffect } from 'react';
import './App.css';
import Jumbotron from './components/Jumbotron';
import TableData from "./components/TableData";
import SearchBar from "./components/SearchBar";
import TableHtml from "./components/TableHtml";

// import SearchContext from '../src/utils/SearchContext';

function App() {
  //create states for employee array and search value
// state = {employeeData: [], search: ''};

// handleInputChange = event => {
//     const value = event.target.value;
//     const name = event.target.name;
//     this.setState({
//         [name]: value
//     })
//     this.searchEmployee(this.state.search);
// };

  //Sort alphabetically ascending on button click
  // handleSortA = (e) => {
  //   e.preventDefault();
  //   var sorted = employeeData.sort(function (a, b) {
  //     if (a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
  //     if (a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
  //     return 0;
  //   })

  //   setEmployeeData([...sorted])
  // }

  //Sort alphabetically descending on button click
//  handleSortZ = (e) => {
//     e.preventDefault();
//     var sorted = employeeData.sort(function (a, b) {
//       if (b.name.toLowerCase() < a.name.toLowerCase()) { return -1; }
//       if (b.name.toLowerCase() > a.name.toLowerCase()) { return 1; }
//       return 0;
//     })

//     setEmployeeData([...sorted])
//   }

  // render data on each change of search
  // useEffect(() => {
  //   if (search === "") {
  //     setEmployeeData(employeeData)
  //   } else {
  //     const test = (employeeData.filter(item => item.name.first.toLowerCase().includes(search.toLowerCase())));
  //     console.log(test);
  //     console.log(search.toLowerCase());
  //     console.log(employeeData.filter(item => item.name.first.toLowerCase()));
  //     console.log(employeeData);
  //   }

  // }, [search])

  return (
    <div className="App">
      <TableData />
      <Jumbotron />
      <SearchBar />
      <TableHtml
        // headings={this.state.headings}
        // rows={this.state.rows}
        // format={this.state.format}
      />
    </div>
  );

}

export default App;