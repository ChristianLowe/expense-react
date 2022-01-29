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

    render() {
        return (
        <>
            <Stack direction="horizontal" gap={3} className='p-2'>
                <Button variant='primary'>Save List</Button>
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
