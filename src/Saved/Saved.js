// import React, { Component } from "react";

// class Search extends Component {
//     state = {
//         title: '',
//         serves: '',
//         readyInMinutes: '',
//         image: '',
//         id: ''
//         }
//     } 

//     static contextType = ApiContext;

//     handleSubmit(event) {
//         event.preventDefault();
//         const {name} = this.state;
    
        
//         let options = {
//             method: 'POST', 
//             body: JSON.stringify({title, serves, readyInMinutes, image, id }),
//             headers: { 'Content-Type': 'application/json'}
//         }
//         fetch(`${config.API_ENDPOINT}/Saved/Recipe/`, options) 
//         .then(res => res.json())
//         .then(() => {
//             this.context.addRecipe({title, serves, readyInMinutes, image, id})
//             this.props.history.push(`/Saved`)
//         })
//     }

//     render() {
        
//         return (
//             <form className="registration" onSubmit={e => this.handleSubmit(e)}>
//                 <h2>Add Type</h2>
//                 <div className="addtype__hint">* required field</div>  
//                 <div className="form-group">
//                 <label htmlFor="name">Name *</label>
//                 <input type="text" className="name__control"
//                     name="name" id="name" onChange={e => this.updateName(e.target.value)}/>
//                 {this.state.name.touched}
//                 </div>
    
//                 <div className="addType__button__group">
//                 <button type="reset" className="addtype__button">
//                     Cancel
//                 </button>
//                 <button type="submit" className="addtype__button" disabled={this.validateName()}>
//                     Save
//                 </button>
//                 </div>
//             </form>
//         )
//     }

// }

// export default Search;