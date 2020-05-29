import React from "react";
import Button from '@material-ui/core/Button';
import Form from 'react-bootstrap/Form';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

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

    handleTeacherChange = (event) => {
        this.setState({ teachers: [event.target.value] });
    }

    render() {
        return (
            <div className="form">
                <Form id="name">
                    <Form.Group>
                        <h3>New Course Name</h3>
                        <Form.Control as="textarea" rows="1"
                            value={this.state.name}
                            onChange={this.handleCourseNameChange} name="name" id="name"
                            maxLength="50" placeholder="Course Title" required />

                        <InputLabel id="addteacher">Teacher Name</InputLabel>
                        <Select labelId="teacherlabel" value={""} onChange={this.handleTeacherChange}>
                            {this.props.allTeachers.map((teacher) => (
                                <MenuItem key={teacher.name} value={teacher.name}>
                                    {teacher.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </Form.Group>
                    <Button className="Submit" onClick={() => { this.props.handleNewCourse(this.state) && document.getElementById("name").reset() }}>
                        Submit
                            </Button>
                </Form>
            </div>
        );
    }
}

export default NewCourse;