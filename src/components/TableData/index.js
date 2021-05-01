import React, { Component } from 'react';
import TableHtml from '../TableHtml';
import API from '../../utils/api'

class TableData extends Component {
    state = {
        rows: [[]],
        headings: ["Picture", "Name", "Email", "Phone", "Nationality"],
        format: "",
        employees: []
    };

    componentDidMount() {
        this.searchEmployee();
    }

    componentDidUpdate(prevProps) {
        if (this.props.search !== prevProps.search) this.displayEmployees();
    }

    displayEmployees = () => {

        const rows = this.state.employees.filter(employee => employee.name.first.toLowerCase().includes(this.props.search))
            .map(employee => {
                return [<img src={employee.picture.thumbnail} alt={employee.name}></img>, `${employee.name.first} ${employee.name.last}`, employee.email, employee.phone, employee.nat]
            })
        console.log(rows);
        this.setState({ rows })
    }

    searchEmployee = () => {
        API.getEmployee()
            .then(employees => {
                this.setState({ employees: employees.data.results }, () => {this.displayEmployees()})
                console.log(employees.data.results);
                console.log(this.props.search);
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <TableHtml
                headings={this.state.headings}
                rows={this.state.rows}
                format={this.state.format}
            />
        )
    };

}

export default TableData;