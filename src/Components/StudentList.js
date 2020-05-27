import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { CardHeader } from '@material-ui/core';

class StudentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allStudents: [
                {
                    name: "gbj",
                    courses: ["Grade 4 Section 1"],
                    emergencyContact: "1-800-ANXIETY"
                },
                {
                    name: "skbj",
                    courses: ["Grade 4 Section 2"],
                    emergencyContact: "1-800-SAVEME"
                },
                {
                    name: "ek",
                    courses: ["Grade 4 Section 1"],
                    emergencyContact: "1-800-STRESS"
                },
                {
                    name: "aw",
                    courses: ["Grade 4 Section 2"],
                    emergencyContact: "1-800-FML"
                },
            ]
        };
    }

    render() {
        return (
            this.state.allStudents.map((student) => {
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
}

export default StudentList;