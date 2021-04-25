import React from "react";
// import TableData from "../TableData"
// import API from "../../utils"

function TableHtml() {
  return (
    <table className="font table table-striped">
      <thead>
        <tr>
          <th scope="col">Photo</th>
          <th scope="col">First name</th>
          <th scope="col">Last name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="col">: ) </th>
          <td>Moira</td>
          <td>Rose</td>
          <td>Moira@email.com</td>
          <td>407-828-1000</td>
        </tr>
        <tr>
          <th scope="col">: ) </th>
          <td>David</td>
          <td>Rose</td>
          <td>Moira@email.com</td>
          <td>407-828-1000</td>
        </tr>
      </tbody>
    </table>
  );
}
export default TableHtml;
