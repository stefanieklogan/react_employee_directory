import React from "react";

function TableData (props) {
    return (
        <div className="text-center">
            <tr>
                <th scope="row"></th>
                <img alt={props.picture.thumbnail} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
                <td>{props.name}</td>
                <td>{props.email}</td>
                <td>{props.phone}</td>
                <td>{props.nat}</td>
            </tr>
        </div>
    );
}

export default TableData;