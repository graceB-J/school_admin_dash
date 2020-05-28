import React from 'react';
import './App.css';

import CourseList from './Components/CourseList.js';
import TeacherList from './Components/TeacherList.js';
import StudentList from './Components/StudentList.js';
import NewCourse from './Components/NewCourse.js';
import NewTeacher from './Components/NewTeacher.js';
import NewStudent from './Components/NewStudent.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [
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
      ],
      teachers: [
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
      ],
      students: [
        {
          name: "gbj",
          courses: ["Grade 4 Section 1"],
          emergencycontact: "Dave",
          emergencyphone: "1-800-ANXIETY",
        },
        {
          name: "skbj",
          courses: ["Grade 4 Section 2"],
          emergencycontact: "Kim",
          emergencyphone: "1-800-SAVEME"
        },
        {
          name: "ek",
          courses: ["Grade 4 Section 1"],
          emergencycontact: "Keller",
          emergencyphone: "1-800-STRESS"
        },
        {
          name: "aw",
          courses: ["Grade 4 Section 2"],
          emergencycontact: "Weber",
          emergencyphone: "1-800-FML",
        },
      ],
    }
  }

  handleNewCourse = ({ name, teachers, students }) => {
    this.setState(prevState => {
      const item = [
        name = name,
        teachers = teachers,
        students = students,
      ]
      return { courses: [...prevState.courses, item] }
    })
  }
  handleNewStudent = ({ name, emergencycontact, emergencyphone }) => {
    this.setState(prevState => {
      const item = [
        name = name,
        emergencycontact = emergencycontact,
        emergencyphone = emergencyphone,
      ]
      return { students: [...prevState.students, item] }
    })
  }
  handleNewTeacher = ({ name, students, courses }) => {
    this.setState(prevState => {
      const item = [
        name = name,
        students = students,
        courses = courses,
      ]
      return { teachers: [...prevState.teachers, item] }
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Administrator View: Thomas Jefferson Elementary School
        </header>

        <div className="studentlist">
          Students: <StudentList allStudents={this.state.students} />
          <NewStudent>  handleNewStudent={this.handleNewStudent}</NewStudent>
        </div>
        <div className="teacherlist">
          Teachers: <TeacherList allTeachers={this.state.teachers} />
          <NewTeacher>  handleNewTeacher={this.handleNewTeacher}</NewTeacher>
        </div>
        <div className="courselist">
          Courses: <CourseList allCourses={this.state.courses} />
          <NewCourse>  handleNewCourse={this.handleNewCourse}</NewCourse>
        </div>
      </div>
    );
  }
}


export default App;
