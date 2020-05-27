import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { CardHeader } from '@material-ui/core';

class CourseList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allCourses: [
                {
                    name: "Grade 4 Section 1",
                    teachers: ["Ms. Ric"],
                    students: ["gbj", "ek"],
                },
                {
                    name: "Grade 4 Section 2",
                    teachers: ["Mrs. Cisz"],
                    students: ["skbj", "aw"],
                }
            ]
        };
    }

    render() {
        return (
            this.state.allCourses.map((course) => {
                return (
                    <div className='course'>
                        <Card className='course'>
                            <CardHeader title={course.name} subheader={"taught by " + course.teachers}> </CardHeader>
                            <Button size="small"> Add Teacher </Button>
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
}

export default CourseList;