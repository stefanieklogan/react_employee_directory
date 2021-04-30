import React from "react";
import './style.css';

function SearchBar(props) {
    return (
        <div className="searchContainer">
         <input type="text" className="searchInput" placeholder="Search for employee"onChange={props.handleInputChange}/>   
        </div>
    );
}

export default SearchBar;