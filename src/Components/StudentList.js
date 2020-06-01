import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CardHeader } from '@material-ui/core';

const StudentList = props => {
    const allStudents = props.allStudents;
    //console.log(allStudents);
    return (
        allStudents.map((student) => {
            return (
                <div className='students'>
                    <Card className='student'>
                        {/* <CardHeader title={student.name} subheader={"enrolled in: " + student.courses}> </CardHeader> */}
                        <CardHeader title={student.name}> </CardHeader>
                        <CardContent>
                            <div className="info">
                                Emergency Contact: {student.emergencycontact}
                            </div>
                            <div>
                                Emergency Phone: {student.emergencyphone}
                            </div>
                        </CardContent>
                    </Card>
                </div >
            );
        })
    );
}

export default StudentList;