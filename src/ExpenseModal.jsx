import React from "react";
import {Form, Button, FormControl, InputGroup, Modal} from "react-bootstrap";
import {Formik} from 'formik';
import * as yup from 'yup';

class ExpenseModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            validated: false
        };
    }

    expenseSchema = () => {
        return yup.object().shape({
            name: yup.string().min(1, "*Names must have at least 1 characters").required('Expense Name is required'),
            cost: yup.number().positive().required('Monthly Cost is required')
        });
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onHide}>
                <Formik
                    initialValues={{
                        name:this.props.expense ? this.props.expense.name : '',
                        cost:this.props.expense ? this.props.expense.cost/100 : 1,
                     }}
                    validationSchema={this.expenseSchema}
                    onSubmit={this.props.onSubmitModal}>
                    {({values, handleChange, isValid, isInvalid, handleSubmit, touched,errors}) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Modal.Header closeButton>
                            <Modal.Title>{this.props.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                                <Form.Group className="mb-3">
                                    <Form.Label>Expense Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        placeholder="Expense Name"
                                        onChange={handleChange}
                                        value={values.name}
                                        isValid={touched.name && !errors.name}
                                        isInvalid={!!errors.name}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      {errors.name}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Monthly Cost</Form.Label>
                                    <InputGroup hasValidation>
                                        <InputGroup.Text>$</InputGroup.Text>
                                        <Form.Control
                                            type="text"
                                            name="cost"
                                            placeholder="Monthly Cost"
                                            onChange={handleChange}
                                            value={values.cost}
                                            isValid={touched.cost && !errors.cost}
                                            isInvalid={!!errors.cost}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                          {errors.cost}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="danger" onClick={this.props.onHide}>
                                Cancel
                            </Button>
                            <Button type="submit" variant="primary">
                                Submit
                            </Button>
                        </Modal.Footer>
                    </Form>
                    )}
                </Formik>
            </Modal>
        );
    }
}

export default ExpenseModal;