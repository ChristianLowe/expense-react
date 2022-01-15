import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ExpenseList from "./ExpenseList";
import ExpenseHeader from "./ExpenseHeader";
import './App.css';

class App extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm={4}>
                        <h1>Expense App</h1>
                        Lorem Ipsum vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas
                    </Col>
                    <Col sm={8}>
                        <ExpenseHeader />
                        <ExpenseList className='expense-list' />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;
