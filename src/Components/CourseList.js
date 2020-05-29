import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { CardHeader } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Form from 'react-bootstrap/Form';


const CourseList = props => {
    const allCourses = props.allCourses;
    const allTeachers = props.allTeachers;
    const allStudents = props.allStudents;
    const [teachername, setTeacherName] = React.useState([]);

    const handleChange = (event) => {
        setTeacherName(event.target.value);
    };

    return (
        allCourses.map((course) => {
            return (
                <div className='course'>
                    <Card className='course'>
                        <CardHeader title={course.name} subheader={"taught by " + course.teachers}> </CardHeader>
                        {/* <Button size="small"> Add Teacher </Button> */}
                        <Form>
                            <InputLabel id="addteacher">Teacher Name</InputLabel>
                            <Select labelId="teacherlabel" value={allTeachers.teacher} onChange={handleChange}>
                                {allTeachers.map((teacher) => (
                                    <MenuItem key={teacher.name} value={teacher.name}>
                                        {teacher.name}
                                    </MenuItem>
                                ))}
                            </Select>
                            <Button className="Submit" onClick={() => { props.assignTeacher(course.name, teachername) }}>
                                Confirm
                            </Button>
                        </Form>
                        <CardContent>
                            <div className="students">
                                {course.students}
                            </div>
                        </CardContent>
                        <Button size="small" href="https://www.poptropica.com/">Add Student</Button>
                    </Card>
                </div >
            );
        })
    );
}

export default CourseList;