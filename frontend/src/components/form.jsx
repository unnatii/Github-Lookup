import React, { Component } from 'react';
import './form.css'

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
            <form  onSubmit={this.mySubmitHandler}>
              {/* className="form-row align-items-center"    */}
            <div className="form-div"   >
              <div className="input-div">
                <input className="input-tag" type="text" placeholder={this.props.placevalue}  
                  onChange={this.myChangeHandler1} />
              </div>
              <div className="select-div" >
                <select  name="option" onChange={this.myChangeHandler2}>
                    <option  value="1">User</option>
                    <option  value="2">Repository</option>
                </select>
              </div>
              <div className="button-div" >
                <button type="submit" className="btntag ">Search</button>
              </div>
            </div>
          </form>
         );
    }
}
 
export default Form;

