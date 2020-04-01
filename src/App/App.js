import React, { Component } from "react";
import {
    Route,
    NavLink
  } from "react-router-dom";
import config from '../config';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlus, faChevronLeft, faTrashAlt, faCheckDouble, faCoffee, faRunning
} from '@fortawesome/free-solid-svg-icons'
import Home from '../Home/Home'
import Saved from '../Saved/Saved'
import Search from '../Search/Search'
import Contact from '../Contact/Contact'
import 'typeface-roboto'
import './App.css'
import RecipeContext from '../RecipeContext'
import swal from 'sweetalert';

library.add(faPlus, faChevronLeft, faTrashAlt, faCheckDouble, faCoffee, faRunning)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    }
  }

  
  static contextType = RecipeContext;

  componentDidMount() {
   
    fetch(`${config.API_ENDPOINT}/recipe`)
    .then(recipesRes => {
      console.log(recipesRes)
      if (!recipesRes.ok)
        return recipesRes.json().then(e => Promise.reject(e));
      return (recipesRes.json());
    })
    .then((recipes) => {
      console.log(recipes);
      this.setState({recipes});
    })
    .catch(error => {
      console.error({error});
    });
  }

  handleDeleteRecipe = recipeId => {
    this.setState({
        recipes: this.state.recipes.filter(recipe => recipe.id !== recipeId)
    });
  };

  saveRecipe = recipe => {
    let options = {
        method: 'POST', 
        body: JSON.stringify({
                title: recipe.title, 
                id: recipe.id, 
                servings: recipe.servings, 
                readyInMinutes: recipe.readyInMinutes, 
                image: recipe.image }),
        headers: { 'Content-Type': 'application/json'}
    }
    fetch(`${config.API_ENDPOINT}/recipe`, options) 
    .then(res => res.json())

    .then(data => {
      this.setState({recipes: [...this.state.recipes, data]});
      swal({
        title: "Saved!",
        text: "Go to the Saved Recipes page to see your recipes",
        icon: "success",
      });
    })
  }

  render() {
      const value = {
        recipes: this.state.recipes,
        savedRecipes: this.savedRecipes,
        saveRecipe: this.saveRecipe,
        deleteRecipe: this.handleDeleteRecipe,
      }

      return (
          <RecipeContext.Provider value={value}>
              <div>
                  <h1>Recipe Finder</h1>
                  <ul className="header">
                      <li><NavLink exact to="/">Home</NavLink></li>
                      <li><NavLink to="/Search">Search for Recipes</NavLink></li>
                      <li><NavLink to="/Saved">Saved Recipes</NavLink></li>
                      <li><NavLink to="/contact">Contact</NavLink></li>
                  </ul>
                  <div className="content">
                      <Route exact path="/" component={Home}/>
                      <Route path="/Search" component={Search}/>
                      <Route path="/Saved" component={Saved}/>
                      <Route path="/Contact" component={Contact}/>
                      <div className="footer">
                          <p>Created by Alyssa Bonesteel</p>
                          <p>Copyright © 2020</p>
                          <p>All Rights Reserved!</p>
                      </div>
                  </div>
              </div>
            </RecipeContext.Provider>
      );
  };
}
 
export default App;
