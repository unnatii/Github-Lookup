import React, { Component } from 'react';
import axios from "axios";
import Tab from './tabs';


class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userObj: '',
            userId:props.match.params.user,
            repodata:''
         };
      }
    Userdata = usr =>{
        axios.get(`https://api.github.com/users/${this.state.userId}`)
        .then(response => {
           
            this.setState({userObj:response.data})
      
        })
        .catch(error => {
          console.log(error);
        });
      }

      Repodata = () =>{
        axios.get(`https://api.github.com/users/${this.state.userId}/repos`)
        .then(response => {
           
            this.setState({repodata:response.data})
      
        })
        .catch(error => {
          console.log(error);
        });
      }

    componentDidMount() {
       this.Userdata("");
       this.Repodata();
        
    }
  
    
    render() { 
        
    return ( 
      <React.Fragment>
              
            <Tab info={this.state.userObj} repo={this.state.repodata}/>
            </React.Fragment> );
    }
}
 
export default UserPage;