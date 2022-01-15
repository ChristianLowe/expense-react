import React from "react";
import {Button, FormControl, InputGroup, Modal} from "react-bootstrap";

class ExpenseModal extends React.Component {
    render() {
        return (
            <Modal show={this.props.expenseName} onHide={this.props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.expenseName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id='cost-label'>Monthly Cost</InputGroup.Text>
                        <FormControl
                            aria-label='Cost'
                            aria-describedby='cost-label'
                            defaultValue={this.props.expenseCost}
                            onChange={this.props.onCostChanged}
                        />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={this.props.onClickDelete}>
                        Delete Expense
                    </Button>
                    <Button variant="primary" onClick={this.props.onHide}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ExpenseModal;
