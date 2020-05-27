import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { CardHeader } from '@material-ui/core';

const TeacherList = props => {
    const allTeachers = props;


    return (
        allTeachers.map((teacher) => {
            return (
                <div className='teachers'>
                    <Card className='teacher'>
                        <CardHeader title={teacher.name} subheader={"teaches: " + teacher.courses}> </CardHeader>
                        <CardContent>
                            <div className="students">
                                {teacher.students}
                            </div>
                        </CardContent>
                    </Card>
                </div >
            );
        })
    );

}

export default TeacherList;