import React from "react";
import Button from '@material-ui/core/Button';
import Form from 'react-bootstrap/Form';

class NewStudent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            courses: [],
            emergencycontact: "",
            emergencyphone: ""
        }
    };


    handleNameChange = (event) => {
        this.setState({ name: event.target.value })
    }
    handleECChange = (event) => {
        this.setState({ emergencycontact: event.target.value })
    }
    handleECphoneChange = (event) => {
        this.setState({ emergencyphone: event.target.value })
    }

    render() {
        return (
            <div className="SelectionAreaBox">
                <div className="FastRatio">
                    <Form>
                        <Form.Group controlId="info">
                            <h3>New Student Name</h3>
                            <Form.Control as="textarea" rows="1"
                                value={this.state.name}
                                onChange={this.handleNameChange} name="name"
                                maxLength="50" placeholder="name" required />
                            <h3>Emergency Contact Info</h3>
                            <Form.Control as="textarea" rows="1"
                                value={this.state.emergencycontact}
                                onChange={this.handleECChange} name="ECname"
                                maxLength="50" placeholder="EC name" required />
                            <h3>Phone</h3>
                            <Form.Control as="textarea" rows="1"
                                value={this.state.emergencyphone}
                                onChange={this.handleECphoneChange} name="phone"
                                maxLength="15" placeholder="phone" required />
                        </Form.Group>
                        <Button className="Submit" onClick={() =>
                            this.props.handleNewStudent(this.state)}>
                            Submit
                            </Button>
                    </Form>
                </div>
            </div >
        );
    }
}

export default NewStudent;