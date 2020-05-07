import React from 'react'

export default function TodaysFood(props) {
    //this is an array of food, so we need to use map
    //map in app.js ?
    //we need to do it here

    return (     
        props.foodArray.map((food, index) => (
            <div key={index}>
                <h2>Name: {food.name}</h2>
                <p>Quantity: {food.quantity}</p>
                <p>Calories: {food.calories}</p>
            </div>
        ))
    )
}
