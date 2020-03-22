import React, { Component } from "react";
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './Home.css';


class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Welcome to the Recipe Finder App</h1>
        <p>Recipe Finder helps you search for recipes by 
          ingredient and save your favorites for later! 
          You can access all your favorite recipes by heading 
          over to the My Recipes page.</p>

        <h2>
            <Link to="/App">Try it out for yourself!</Link>{' '}
            <FontAwesomeIcon icon= "coffee"/>
        </h2>

      </div>
    );
  }
}
 
export default Home;