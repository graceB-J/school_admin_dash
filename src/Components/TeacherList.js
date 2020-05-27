import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { CardHeader } from '@material-ui/core';

class TeacherList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allTeachers: [
                {
                    name: "Ms. Ric",
                    students: ["gbj", "ek"],
                    courses: ["Grade 4 Section 1"]
                },
                {
                    name: "Mrs. Cisz",
                    students: ["skbj", "aw"],
                    courses: ["Grade 4 Section 2"]
                }
            ]
        };
    }

    render() {
        return (
            this.state.allTeachers.map((teacher) => {
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
}

export default TeacherList;