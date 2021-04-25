import React from "react";
import './style.css';

function SearchBar() {
    return (
        <div className="searchContainer">
         <input type="text" className="searchInput" placeholder="Search for employee"/>   
        </div>
    );
}

export default SearchBar;