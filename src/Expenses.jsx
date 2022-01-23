import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ExpenseList from "./ExpenseList";
import ExpenseHeader from "./ExpenseHeader";

class Expenses extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expenses: []
        }

    }

    addNewExpenses = (newExpenses) => {
        let expenses = this.state.expenses.slice();
        this.setState({expenses: expenses.concat(newExpenses)});
    }

    render() {
        return (
        <>
            <ExpenseHeader addNewExpenses = {this.addNewExpenses}/>
            <ExpenseList className='expense-list'
                addNewExpenses = {this.addNewExpenses}
                expenses={this.state.expenses}
                setExpenses={(newExpenses) => this.setState({expenses: newExpenses})}
            />
        </>

        );
    }
}

export default Expenses;
