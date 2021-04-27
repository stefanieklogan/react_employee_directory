import React from "react";
import API from "../../utils/api";

class TableData extends Component {
    state = {
        result: {},
        search: ""
    };

componentDidMount() {
    this.searchEmployee();
}

searchEmployee = () => {
    API.getEmployee()
    .then(employee => {
        console.log(employee);
        this.setState({ result: employee.data })})
        .catch(err => console.log(err));
};

handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
}
}
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