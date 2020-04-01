import React, { Component } from "react";
import RecipeContext from '../RecipeContext';
import config from '../config';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faChevronLeft, faTrashAlt, faCoffee,
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './Saved.css'

class Saved extends Component {
    static defaultProps ={
        onDeleteRecipe: () => {},
      }

    static contextType = RecipeContext;

    handleDeleteRecipe = recipeId => {
        console.log(recipeId)
        this.setState({
            recipes: this.state.recipes.filter(recipe => recipe.id !== recipeId)
        });
    };

    handleClickDelete = recipe => {
        const recipeId = recipe.id
          console.log(this.props)
          console.log(recipe)
          console.log(recipeId)
        
        fetch(`${config.API_ENDPOINT}/recipe/${recipeId}`, {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json'
          },
        })
    
          .then(() => {
            this.context.deleteRecipe(recipeId)
            this.props.onDeleteRecipe()
          })
    
          .catch(error => {
            console.error({ error })
          })
      }
    

    render(){
        const { recipes=[] } = this.context
        console.log(recipes)
        return (
            <section className='saved'>
              <h2 className="saved_recipes">Saved Recipes</h2>
                <ul className="saved_recipe_card">
                 {recipes.map(recipe=> (
                    <li key={recipe.identification}>
                        <p className="title">{recipe.title}</p>
                        <p>Serves: {recipe.servings}</p>
                        <p>Ready in: {recipe.readyInMinutes} Minutes</p>
                        <img src={`https://spoonacular.com/recipeImages/${recipe.image}`} alt="recipe"/> 
                        <br />
                        <button
                            className='recipe_delete'
                            type='button'
                            onClick={() => this.handleClickDelete(recipe)}
                        >
                        <FontAwesomeIcon icon='trash-alt' />
                        {' '}
                        Delete
                        </button> 
                    </li> 
                    ))}
                </ul>
            </section>
        )
    }
}


export default Saved;