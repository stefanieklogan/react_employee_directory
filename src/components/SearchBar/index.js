import React from "react";
import './style.css';

function SearchBar(props) {
    return (
        <div className="searchContainer">
         <input type="text" className="searchInput" placeholder="Search for employee" onChange={(e)=> {
             props.setSearch(e.target.value.toLowerCase())}}/>   
        </div>
    );
}

export default SearchBar;