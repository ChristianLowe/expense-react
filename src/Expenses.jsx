import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ExpenseList from "./ExpenseList";
import ExpenseHeader from "./ExpenseHeader";

class Expenses extends React.Component {
    render() {
        return (
        <>
            <ExpenseHeader />
            <ExpenseList className='expense-list' />
        </>

        );
    }
}

export default Expenses;
