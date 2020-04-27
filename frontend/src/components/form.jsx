import React, { Component } from 'react';
// import axios from 'axios';

class Form extends Component {
    
    constructor(props) {
        super(props);
        this.state = { username: '' };
      }
      myChangeHandler = (event) => {
        this.setState({username: event.target.value});
      }
      mySubmitHandler = (event) => {
        event.preventDefault();
        this.props.searchValue(this.state.username);
       }

    render() { 
        return ( 
            <form style={{ margin:'60px 0 50px 500px'}} onSubmit={this.mySubmitHandler}>
            <div class="form-row align-items-center">
             
              <div class="col-auto">
                <label class="sr-only" for="inlineFormInputGroup">Username</label>
                <input type="text" class="form-control" id="inlineFormInputGroup" 
                placeholder="Username" onChange={this.myChangeHandler} />
              </div>
           
              <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-2">Search</button>
              </div>
            </div>
          </form>
         );
    }
}
 
export default Form;

