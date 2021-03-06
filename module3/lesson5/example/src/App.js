import React, { Component } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/Foodbox/FoodBox';
import SearchBar from './components/SearchBar/SearchBar';
import TodaysFood from "./components/TodaysFood/TodaysFood";

class App extends Component {
  state = {
    foods,
    results: foods,
    formIsShowed:false,
    todaysFood: []
  }

  handleInput = (e) => {
    let {name, value} = e.target;
    this.setState({[name]: value})
  }

  displayForm=()=>{
    this.setState({
      formIsShowed:!this.state.formIsShowed})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.displayForm();

    const newFood = {
      name: this.state.name,
      calories: this.state.calories,
      quantity: this.state.quantity,
      image: this.state.image
    }

    this.setState({
      foods: [...this.state.foods, newFood]
    })
  }

  handleSearchInput = (e) => {
    let {value} = e.target;
    const filterResults = this.state.foods.filter(f=>f.name.toLowerCase().includes(value))
    this.setState({
      results: filterResults,
      searchText: value
    })
  }

  addFood = (food) => {
    const todaysFood = [...this.state.todaysFood, food]
    
    this.setState({
      todaysFood: todaysFood 
    })
  }
  
  
  render() {
    return (
      <div className="App">
        <SearchBar
          searchText={this.state.searchText}
          handleSearchInput={this.handleSearchInput}
        />

        {this.state.formIsShowed ? 
        <form className="food-form" onSubmit={(e)=> this.handleSubmit(e)}>
          <label name="name">Name</label>
          <input type="text" 
                 name="name"
                 value={this.state.name} 
                 onChange={(e)=> this.handleInput(e)}>
          </input>
          <label name="name">Calories</label>
          <input type="number" 
                 name="calories" 
                 value={this.state.calories} 
                 onChange={(e)=> this.handleInput(e)}>
          </input>
          <label name="name">Quantity</label>
          <input type="number" 
                 name="quantity" 
                 value={this.state.quantity} 
                 onChange={(e)=> this.handleInput(e)}>
          </input>
          <label name="name">Image</label>
          <input type="text" 
                 name="image" 
                 value={this.state.image} 
                 onChange={(e)=> this.handleInput(e)}>
          </input>
          <input type="submit" value="submit" />

        </form> : <button className='button is-primary' onClick={this.displayForm}>Add some food</button>
        }
        {this.state.results.map((element, key) => 
         <FoodBox 
           key={key}
           name={element.name}
           calories={element.calories}
           image={element.image}
           quantity={element.quantity}
           addFood={this.addFood}
         />
        )}
        <TodaysFood 
          foodArray={this.state.todaysFood}
        />
       
      </div>
    );
  }
}

export default App;