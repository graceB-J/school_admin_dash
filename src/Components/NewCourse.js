import React from "react";
import Button from '@material-ui/core/Button';
import Form from 'react-bootstrap/Form';

class NewCourse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            teachers: [],
            students: [],
        };
    }

    handleCourseNameChange = (event) => {
        this.setState({ name: event.target.value })
    }

    render() {
        return (
            <div className="form">
                <Form>
                    <Form.Group controlId="comments">
                        <h3>New Course Name</h3>
                        <Form.Control as="textarea" rows="1"
                            value={this.state.name}
                            onChange={this.handleCourseNameChange} name="name"
                            maxLength="50" placeholder="Course Title" required />
                    </Form.Group>
                    <Button className="Submit" onClick={() => { this.props.handleNewCourse(this.state) }}>
                        Submit
                            </Button>
                </Form>
            </div>
        );
    }
}

export default NewCourse;