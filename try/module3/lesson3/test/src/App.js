import React, {Component} from 'react';
import './App.css'; 

export default class App extends Component {

  state = {
    showStudents: true,
    students: [{
      name: 'wiggles',
      age: 6
    },{
      name: 'Karel',
      age: 3
    },{
      name: 'Buggle',
      age: 7
    }]
  }

  deleteCat = (name) => {
    const students = this.state.students.filter(student => student.name !== name)
    this.setState({students})
  }

  render() {
    if (!this.state.showStudents) {
      return <div>students are hidden</div>
    }
    return (
      this.state.showStudents &&
      <div>
        {this.state.students.map(student => (
        <>
        <h2>{student.name}</h2>
        <p>{student.age}</p>
        {student.age > 6 ? 'old' : 'young'}
        <p onClick={() => this.deleteCat(student.name)}>delete</p>
        </>
      ))}
      </div>
    )
  }
}
