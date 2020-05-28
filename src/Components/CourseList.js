import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { CardHeader } from '@material-ui/core';

const CourseList = props => {
    const allCourses = props.allCourses;

    return (
        allCourses.map((course) => {
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

export default CourseList;