import React from "react";
import Button from '@material-ui/core/Button';
import Form from 'react-bootstrap/Form';

class NewTeacher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            students: [],
            courses: [],
        };
    }

    handleNameChange = (event) => {
        this.setState({ name: event.target.value })
    }

    render() {
        return (
            <div className="SelectionAreaBox">
                <div className="form">
                    <Form>
                        <Form.Group controlId="comments">
                            <h3>New Teacher Name</h3>
                            <Form.Control as="textarea" rows="1"
                                value={this.state.name}
                                onChange={this.handleNameChange} name="name"
                                maxLength="50" placeholder="first and last name" required />
                        </Form.Group>
                        <Button className="Submit" onClick={() =>
                            this.props.handleNewTeacher(this.state)}>
                            Submit
                            </Button>
                    </Form>
                </div>
            </div >
        );
    }
}

export default NewTeacher;