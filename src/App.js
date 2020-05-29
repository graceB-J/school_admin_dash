import React from 'react';
import './App.css';

import CourseList from './Components/CourseList.js';
import TeacherList from './Components/TeacherList.js';
import StudentList from './Components/StudentList.js';
import NewCourse from './Components/NewCourse.js';
import NewTeacher from './Components/NewTeacher.js';
import NewStudent from './Components/NewStudent.js';

import firebase from './firebase.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleNewCourse = this.handleNewCourse.bind(this);
    this.state = {
      courses: [],
      teachers: [],
      students: []
      /*
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
        */
    }
  }

  handleNewCourse = (e) => {
    const itemsRef = firebase.database().ref('courses');
    const item = {
      name: e.name,
      teachers: e.teachers,
      students: e.students,
    }
    // const teacherRef = firebase.database().ref(`teachers/${teachers.id}`);
    // teacherRef.push(item);
    itemsRef.push(item);
  }
  handleNewStudent = (e) => {
    const itemsRef = firebase.database().ref('students');
    const item = {
      name: e.name,
      emergencycontact: e.emergencycontact,
      emergencyphone: e.emergencyphone,
    }
    itemsRef.push(item);
  }
  handleNewTeacher = (e) => {
    const itemsRef = firebase.database().ref('teachers');

    const item = {
      name: e.name,
      students: e.students,
      courses: e.courses
    }
    itemsRef.push(item);
  }

  assignTeacher = (coursename, teachername) => {
    const teacherRef = firebase.database().ref('teachers').orderByChild('name').equalTo(teachername);
    teacherRef.push(coursename);

    const courseRef = firebase.database().ref('courses').orderByChild('name').equalTo(coursename);
    courseRef.push(teachername);

    // this.setState(prevState => {
    //   return {
    //     teachers: 
    //   }
    // })
  }

  componentDidMount() {
    const coursesRef = firebase.database().ref('courses');
    const studentsRef = firebase.database().ref('students');
    const teachersRef = firebase.database().ref('teachers');

    coursesRef.on('value', (snapshot) => {
      let courses = snapshot.val();
      let newState = [];
      for (let course in courses) {
        newState.push({
          id: course,
          name: courses[course].name,
          students: courses[course].students,
          teachers: courses[course].teachers
        });
      }
      this.setState({
        courses: newState,
      });
    });

    studentsRef.on('value', (snapshot) => {
      let students = snapshot.val();
      let newState2 = [];
      for (let student in students) {
        newState2.push({
          id: student,
          name: students[student].name,
          courses: students[student].courses,
          emergencycontact: students[student].emergencycontact,
          emergencyphone: students[student].emergencyphone
        });
      }
      this.setState({
        students: newState2,
      });
    });

    teachersRef.on('value', (snapshot) => {
      let teachers = snapshot.val();
      let newState3 = [];
      for (let teacher in teachers) {
        newState3.push({
          id: teacher,
          name: teachers[teacher].name,
          students: teachers[teacher].students,
          courses: teachers[teacher].courses
        });
      }
      this.setState({
        teachers: newState3
      });
    });

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          Administrator View: Thomas Jefferson Elementary School
        </header>

        <div className="studentlist">
          Students: <StudentList allStudents={this.state.students} />
          <NewStudent handleNewStudent={this.handleNewStudent}>  </NewStudent>
        </div>
        <div className="teacherlist">
          Teachers: <TeacherList allTeachers={this.state.teachers} />
          <NewTeacher handleNewTeacher={this.handleNewTeacher} >  </NewTeacher>
        </div>
        <div className="courselist">
          Courses: <CourseList allCourses={this.state.courses} allTeachers={this.state.teachers} allStudents={this.state.students} assignTeacher={this.assignTeacher} />
          <NewCourse handleNewCourse={this.handleNewCourse} allTeachers={this.state.teachers}>  </NewCourse>
        </div>
      </div>
    );
  }
}


export default App;
