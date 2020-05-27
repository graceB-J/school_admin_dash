import React from 'react';
import './App.css';

import CourseList from './Components/CourseList.js';
import TeacherList from './Components/TeacherList.js';
import StudentList from './Components/StudentList.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      teachers: [],
      students: [],
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Administrator View: Thomas Jefferson Elementary School
        </header>

        <div className="studentlist">
          Students: <StudentList courses={this.state.students} />
        </div>
        <div className="teacherlist">
          Teachers: <TeacherList courses={this.state.teachers} />
        </div>
        <div className="courselist">
          Courses: <CourseList courses={this.state.courses} />
        </div>
      </div>
    );
  }
}


export default App;
