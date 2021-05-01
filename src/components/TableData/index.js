import React, { Component } from 'react';
import TableHtml from '../TableHtml';
import API from '../../utils/api'

class TableData extends Component {
    state = {
        rows: [[]],
        headings: ["Picture", "Name", "Email", "Phone", "Nationality"],
        format: "",
        employees: [],
        sort: "DESC"
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

    handleClickChange = e => {
        if (this.state.sort === "DESC") {
            this.setState({ sort: "ASCEND" })
        } else {
            this.setState({ sort: "DESC"})
        }
        this.handleSort();
    }

    handleSort = () => {
        const sortedArr = [...this.state.employees]
        console.log(sortedArr);
        if (this.state.sort === "DESC") {
        sortedArr.sort((a,b) => (a.first > b.first) ? 1:-1)}
        else {
        sortedArr.sort((a,b) => (a.first < b.first) ? 1:-1)
        } 
        this.setState({employees:sortedArr}, () => {this.displayEmployees()})
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
                click={this.handleClickChange}
                rows={this.state.rows}
                format={this.state.format}
            />
        )
    };

}

export default TableData;