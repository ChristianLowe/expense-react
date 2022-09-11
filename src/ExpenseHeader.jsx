import React from "react";
import {Button, Stack} from "react-bootstrap";
import ExpenseModal from "./ExpenseModal"
import {formatCost} from './Helper'

class ExpenseHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showExpenseModal: false
        };
    }

    addExpenseSubmit = (e) => {
        e.cost = formatCost(e.cost);
        this.props.addNewExpense(e);
        this.setState({showExpenseModal: false});
    }

    updateUser = () => {
        fetch("https://dev.expenseapi.chrislowe.io/users/" + this.props.userId + "/expenses",
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.props.expenses)
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => {
            console.error('Error:', error);
         });
    }

    render() {
        return (
        <>
            <Stack direction="horizontal" gap={3} className='p-2'>
                <Button variant='primary' onClick={() => this.updateUser()}>Save List</Button>
                <Button variant='success' onClick={() => this.setState({showExpenseModal: true})}>Add Item</Button>
            </Stack>

            <ExpenseModal
                onHide = {() => this.setState({showExpenseModal: false})}
                title={'Add Expense'}
                show = {this.state.showExpenseModal}
                onSubmitModal = {this.addExpenseSubmit}
            />
        </>
        );
    }
}

export default ExpenseHeader;
