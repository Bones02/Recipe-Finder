import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
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
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import RecipeContext from '../RecipeContext'

library.add(faPlus, faChevronLeft, faTrashAlt, faCheckDouble, faCoffee, faRunning)

class App extends Component {
  state = {
    savedRecipes: [],
  }

  
  static contextType = RecipeContext;

  saveRecipe = recipe => {
    this.setState({
        savedRecipes: [...this.state.savedRecipes, recipe]
    })
    console.log("recipe saved")
    console.log(this.state.savedRecipes)
  }

  render() {
      const value = {
        savedRecipes: this.state.savedRecipes,
        saveRecipe: this.saveRecipe
      }

      return (
          <RecipeContext.Provider value={value}>
              <div>
                  <h1>Recipe Finder</h1>
                  <FontAwesomeIcon icon= "coffee"/>
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
