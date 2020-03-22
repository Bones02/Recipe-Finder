import React, { Component } from "react";
import config from '../config';

class Search extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        recipe: [],
        term: ''
      };
    }

    updateTerm(term) {
        this.setState({term: term });
    }

    handleSubmit() {
        const {term} = this.state
        console.log(`term is ${term}`)
        console.log(`api key is ${config.API_KEY}`)

      fetch(`https://api.spoonacular.com/recipes/search?apiKey=${config.API_KEY}&query=${term}`)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              recipe: result.results
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, recipe, term} = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <div>
                <div className="search_page">
                    <form className="form-search" onSubmit={(e) => handleSubmit(e)}>
                        <label htmlFor="search" >Search:</label>
                        <input type="text" className="form-control" id="term" placeholder="coffee" name="term" onChange={e => this.updateTerm(e.target.value)}/>
                        <button type="submit" className="button-submit"></button>
                    </form>
                </div>
                <ul>
                    {recipe.map(recipe => (
                    <li key={recipe.name}>
                        <p>{recipe.id}</p> 
                        <p>{recipe.title}</p> 
                        <p>{recipe.serves}</p>
                        <p>{recipe.readyInMinutes} </p>
                        <img src={recipe.image}/>
                    </li>
                    ))}
                </ul>
            </div>
        );
      }
    }
}
export default Search;