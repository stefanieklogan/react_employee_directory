import React from "react";
// import TableData from "../TableData"
// import API from "../../utils"
// var FontAwesome = require('react-fontawesome');
// className="fas fa-sort-alpha-down">

import './style.css';

function TableHtml(props) {

  const { format, headings, rows } = props;

  return (
    <table className={`table ${props.format || "table-striped"}`}>
      <thead>
        <tr>
          {headings.map(heading => <th scope="col">{heading}</th>)}
        </tr>
      </thead>
      <tbody>

          {rows.map(row => <tr>{row.map(item => <td>{item}</td>)}</tr>)}

       
      </tbody>
    </table>
  );
};

export default TableHtml;
