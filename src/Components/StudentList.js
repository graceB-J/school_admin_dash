import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { CardHeader } from '@material-ui/core';

const StudentList = props => {
    const allStudents = props.allStudents;
    //console.log(allStudents);
    return (
        allStudents.map((student) => {
            return (
                <div className='students'>
                    <Card className='student'>
                        <CardHeader title={student.name} subheader={"enrolled in: " + student.courses}> </CardHeader>
                        <CardContent>
                            <div className="info">
                                Emergency Contact: {student.emergencyContact}
                            </div>
                        </CardContent>
                    </Card>
                </div >
            );
        })
    );
}

export default StudentList;