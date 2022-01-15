import React from "react";
import {Button, Stack} from "react-bootstrap";

class ExpenseHeader extends React.Component {
    render() {
        return (
            <div>
                <Stack direction="horizontal" gap={3} className='p-2'>
                    <Button variant='primary'>Save List</Button>
                    <Button variant='light'>Add Item</Button>
                </Stack>
            </div>
        );
    }
}

export default ExpenseHeader;
