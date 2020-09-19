import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

  state = {
    name: 'hello',
    hasOscars: true,
    select: []
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }
  handleNameInput = (e) => {
    console.log(e)
    this.setState({
      name: e.target.value
    })
  }

  handleFormChange = (e) => {
    let {name, value} = e.target

    // for checkbox
    if (e.target.type === 'checkbox') {
      value = e.target.checked
    }

    this.setState({[name]: value})
  }
  handleFormChangeM = (e) => {
    let {name, value, options} = e.target
    console.log(options)
    const values = []
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        values.push(options[i].value)
      }
    }
    this.setState({[name]: values})
  }

  handleHasOscarsCheck = (e) => {
    console.log(e.target.checked)
    this.setState({[e.target.name]: e.target.checked })

  }
  render() {
    return (
      <div className="App">
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input type="text" name="name" id="" value={this.state.name} onChange={(e) => this.handleFormChange(e)}/>
        <textarea name="area" id="" value={this.state.area} onChange={(e) => this.handleFormChange(e)} cols="30" rows="10"></textarea>
        <br />
        <select name="select" multiple={true} value={this.state.select} onChange={(e) => this.handleFormChangeM(e)}>
          <option value="Jorg">Jorg</option>
          <option value="Harry">Harry</option>
        </select>
        <input type="checkbox" name="hasOscars" checked={this.state.hasOscars} onChange={(e) => this.handleFormChange(e)} />
        <div onChange={(e) => this.handleFormChange(e)}>
          <input type="radio" name="gender" id="" value="male"/> male
          <input type="radio" name="gender" id="" value="female"/> female
        </div>

        <input type="submit" value="submit"/>
      </form>
    <h1>{this.state.name}</h1>
    </div>
    )
  }
}
