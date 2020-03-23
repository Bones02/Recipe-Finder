import React, { Component } from "react";
import RecipeContext from '../RecipeContext';
//import './Saved.css'

class Saved extends Component {
    static defaultProps = {
        match: {
          params: {}
        }
    }

    static contextType = RecipeContext;

    render(){
        const { savedRecipes=[] } = this.context
        console.log(savedRecipes)
        return (
            <div>
                <p>
                    Saved Recipes
                </p>
                <p>
                    {savedRecipes}
                </p>
            </div>
            
            // <div>
            //     <ul className="recipe_card">
            //         {this.state.savedRecipes.map(recipe => (
            //         <li key={name}>
            //             <p>Id: {id}</p> 
            //             <p>Title: {title}</p> 
            //             <p>Serves: {servings}</p>
            //             <p>Ready in: {readyInMinutes} Minutes</p>
            //             <img src={`https://spoonacular.com/recipeImages/${image}`}/>   
            //             <button type="submit" className="button-delete" 
            //                 onClick={e => this.context.removeRecipe(recipe)}>Remove</button>  
            //         </li> 
            //         ))}
            //     </ul>
            // </div>
        )
    }
}


export default Saved;