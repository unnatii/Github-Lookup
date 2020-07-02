import React, { Component } from 'react';
// import axios from 'axios';

class Form extends Component {
    
    constructor(props) {
        super(props);
        this.state = { key: '',option:"1" };
      }
      myChangeHandler1 = (event) => {
        
        this.setState({key: event.target.value});
      }
      myChangeHandler2 = (event) => {
        
        this.setState({option: event.target.value});
      }
      mySubmitHandler = (event) => {
        event.preventDefault();
        this.props.searchValue(this.state.key,this.state.option);
       }

    render() { 
        return ( 
            <form style={{ margin:'60px 0 50px 500px'}} onSubmit={this.mySubmitHandler}>
                  <div className="radio">
          <label>
            <input type="radio" value="1" checked={this.state.option==="1"} onChange={this.myChangeHandler2} />
            User
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="2" checked={this.state.option==="2"} onChange={this.myChangeHandler2} />
           Repository
          </label>
        </div>
            <div className="form-row align-items-center">
              
             
              <div className="col-auto">
        <label className="sr-only" for="inlineFormInputGroup">{this.props.placevalue}</label>
                <input type="text" className="form-control" id="inlineFormInputGroup" 
                placeholder={this.props.placevalue}  onChange={this.myChangeHandler1} />
              </div>
           
              <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-2">Search</button>
              </div>
            </div>
          </form>
         );
    }
}
 
export default Form;

