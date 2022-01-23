import React from "react";
import {Button, Stack} from "react-bootstrap";
import AddExpenseModal from "./AddExpenseModal"

class ExpenseHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showAddExpenseModal: false
        };
    }

    render() {
        return (
        <>
            <Stack direction="horizontal" gap={3} className='p-2'>
                <Button variant='primary'>Save List</Button>
                <Button variant='success' onClick={() => this.setState({showAddExpenseModal: true})}>Add Item</Button>
            </Stack>

            <AddExpenseModal
                onHide = {() => this.setState({showAddExpenseModal: false})}
                show = {this.state.showAddExpenseModal}
                addNewExpense = {this.props.addNewExpense}
            />
        </>
        );
    }
}

export default ExpenseHeader;
