import React from "react";
import {Alert, ListGroup} from "react-bootstrap";
import ExpenseModal from "./ExpenseModal";
import {formatCost} from './Helper'

class ExpenseList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            activeExpenseIdx: null,
        }
        this.currencyFormatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });
    }

    componentDidMount() {
        fetch("https://dev.expenseapi.chrislowe.io/users/asdf/expenses")
            .then(res => res.json())
            .then(
                (result) => {
                    this.props.setExpenses(result.expenses);
                    this.setState({
                        isLoaded: true,
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded} = this.state;
        if (error) {
            return <Alert variant='warning'>Error: {error.message}</Alert>;
        } else if (!isLoaded) {
            return <Alert varient='secondary'>Loading...</Alert>;
        } else {
            return (<>
                <ListGroup>
                    {this.props.expenses.map((expense, idx) => (
                        <ListGroup.Item
                            key={expense.name}
                            className="d-flex justify-content-between align-items-start"
                            action onClick={() => this.setState({activeExpenseIdx: idx})}
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">{expense.name}</div>
                                {this.formatCents(expense.cost)} / month
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
                <ExpenseModal
                    show = {this.activeExpense()?.name}
                    title= {'Edit Expense'}
                    expense = {this.activeExpense()}
                    expenseCost = {this.formatCents(this.activeExpense()?.cost)}
                    onHide = {() => this.setState({activeExpenseIdx: null})}
                    onCostChanged = {(e) => this.onModalCostChanged(e.target.value)}
                    onClickDelete = {this.onModalClickDelete}
                    onSubmitModal = {this.editExpense}
                />
            </>);
        }
    }

    formatCents = (cents) => {
        if (cents) {
            return this.currencyFormatter.format(cents / 100);
        }
    }

    activeExpense = () => {
        if (this.props.expenses && this.state.activeExpenseIdx !== null) {
            return this.props.expenses[this.state.activeExpenseIdx]
        }
    }

    editExpense = (e) => {
        let cents = formatCost(e.cost);
        let expenseName = e.name;
        let expenses = this.props.expenses.slice();
        expenses[this.state.activeExpenseIdx].cost = cents;
        expenses[this.state.activeExpenseIdx].name = expenseName;
        this.props.setExpenses(expenses);
        this.setState({activeExpenseIdx: null});
    }

    onModalClickDelete = () => {
         if (window.confirm('Are you sure you want to delete this expense?')) {
             const idx = this.state.activeExpenseIdx;
             const expenses = [...this.props.expenses.slice(0, idx), ...this.props.expenses.slice(idx + 1)];
             this.setState({activeExpenseIdx: null});
             this.props.setExpenses(expenses);
         }
    }
}

export default ExpenseList;