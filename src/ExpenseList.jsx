import React from "react";
import {Alert, ListGroup} from "react-bootstrap";
import ExpenseModal from "./ExpenseModal";

class ExpenseList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            expenses: [],
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
                    this.setState({
                        isLoaded: true,
                        expenses: result.expenses
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
        const {error, isLoaded, expenses} = this.state;
        if (error) {
            return <Alert variant='warning'>Error: {error.message}</Alert>;
        } else if (!isLoaded) {
            return <Alert varient='secondary'>Loading...</Alert>;
        } else {
            return (<>
                <ListGroup>
                    {expenses.map((expense, idx) => (
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
                    expenseName = {this.activeExpense()?.name}
                    expenseCost = {this.formatCents(this.activeExpense()?.cost)}
                    onHide = {() => this.setState({activeExpenseIdx: null})}
                    onCostChanged = {(e) => this.onModalCostChanged(e.target.value)}
                    onClickDelete = {this.onModalClickDelete}
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
        if (this.state.expenses && this.state.activeExpenseIdx !== null) {
            return this.state.expenses[this.state.activeExpenseIdx]
        }
    }

    onModalCostChanged = (cost) => {
        const costFloat = parseFloat(cost?.replace('$', ''));

        let cents;
        if (costFloat) {
            cents = Math.round(costFloat * 100);
        } else {
            cents = 0;
        }

        let expenses = this.state.expenses.slice();
        expenses[this.state.activeExpenseIdx].cost = cents;
        this.setState({expenses});
    }

    onModalClickDelete = () => {
         if (window.confirm('Are you sure you want to delete this expense?')) {
             const idx = this.state.activeExpenseIdx;
             const expenses = [...this.state.expenses.slice(0, idx), ...this.state.expenses.slice(idx + 1)];
             this.setState({expenses, activeExpenseIdx: null});
         }
    }
}

export default ExpenseList;