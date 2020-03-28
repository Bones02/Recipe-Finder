import React, { Component } from "react";
import config from '../config';
import RecipeContext from '../RecipeContext';
import './Search.css'

class Search extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        recipes: [],
        term: '',
      };
    }
    static defaultProps = {
        match: {
          params: {}
        }
    }

    static contextType = RecipeContext;

    //This is the API call based on user input term.
    updateTerm(term) {
        this.setState({term: term})
    }

    handleSubmit(e) {
        e.preventDefault();
        e.target.reset();
        const {term} = this.state
        console.log(`term is ${term}`)
        console.log(`api key is ${config.API_KEY}`)

      fetch(`https://api.spoonacular.com/recipes/search?apiKey=${config.API_KEY}&query=${term}`)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              recipes: result.results
            });
          },
          (error) => {
            this.setState({
              error
            });
          }
        )
    }
  
    render() {
      const { error, recipes } = this.state;
      
      if (error) {
        return <div>Error: {error.message}</div>;
      } else {
        return (
            <div>
                <div className="search_page">
                    <form className="form-search" onSubmit={(e) => this.handleSubmit(e)}>
                        <label htmlFor="search" >Search:</label>
                        <input type="text" className="form-control" id="term" 
                            placeholder="coffee" name="term" 
                            onChange={e => this.updateTerm(e.target.value)}/>
                        <button type="submit" className="button-submit">Search!</button>
                    </form>
                </div>
                <ul className="recipe_card">
                    {recipes.map(recipe => (
                    <li key={recipe.identification}>
                        <p className="title">{recipe.title}</p> 
                        <p>Serves: {recipe.servings}</p>
                        <p>Ready in: {recipe.readyInMinutes} Minutes</p>
                        <img src={`https://spoonacular.com/recipeImages/${recipe.image}`}/> 
                        <br />  
                        <button type="button" className="button_save" 
                            onClick={e => this.context.saveRecipe(recipe)}>Save</button>  
                    </li> 
                    ))}
                </ul>
            </div>
        );
      }
    }
}

export default Search;