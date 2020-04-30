import React, { Component } from 'react'
import './App.css';


export default class App extends Component {
  state = {
    name: 'a name',
    story: 'a story',
    bedtime: false,
    stories: []
  }

  // handleNameInput = (e) => {
  //   console.log(e.target)
  //   this.setState({name: e.target.value})
  // }

  // handleStoryInput = (e) => {
  //   console.log(e.target)
  //   this.setState({story: e.target.value})
  // }

  handleInput = (e) => {
    let {name, value} = e.target

    if (e.target.type === 'checkbox') {
      value = e.target.checked
    }

    this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newStories = [...this.state.stories]
    newStories.push({
      name: this.state.name,
      story: this.state.story
    })
    // fetch('/story', {
    //   method: 'POST'
    // })
    // .then()

    this.setState({stories: newStories})
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
    <p>{this.state.story}</p>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleInput(e)}/>
          <textarea name="story" id="" cols="30" rows="10" onChange={(e) => this.handleInput(e)} value={this.state.story}></textarea>
          <select name="category" value={this.state.category} onChange={(e) => this.handleInput(e)} >
            <option value="sci-fi">sci-fi</option>
            <option value="fantasy">fantasy</option>
            <option value="comedy">comedy</option>
          </select>
          <input type="checkbox" name="bedtime" checked={this.state.bedtime} onChange={(e) => this.handleInput(e)}/>
          <input type="submit" value="submit"/>
        </form>
        <div>
          { this.state.stories.map((story, index) => (
            <div>
              <h1>{story.name}</h1>
              <p>{story.story}</p>
            </div>
    )) }
        </div>
      </div>
    )
  }
}