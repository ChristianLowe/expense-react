import React from "react";
import {Form, Button, FormControl, InputGroup, Modal} from "react-bootstrap";

class AddExpenseModal extends React.Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Expense</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Expense Name</Form.Label>
                            <Form.Control type="text" placeholder="Expense Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Monthly Cost</Form.Label>
                            <Form.Control type="text" placeholder=" Monthly Cost" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={this.props.onHide}>
                        Cancel
                    </Button>
                    <Button variant="primary">
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default AddExpenseModal;