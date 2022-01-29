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

    addNewExpense = (newExpense) => {
        let expenses = this.state.expenses.slice().concat(newExpense);
        this.setState({expenses: expenses});
    }

    render() {
        return (
        <>
            <ExpenseHeader addNewExpense = {this.addNewExpense}/>
            <ExpenseList className='expense-list'
                expenses={this.state.expenses}
                setExpenses={(newExpenses) => this.setState({expenses: newExpenses})}
            />
        </>

        );
    }
}

export default Expenses;
