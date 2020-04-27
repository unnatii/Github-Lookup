import React, { Component } from 'react';
import axios from "axios";
import Cards from './cards';
import Form from './form';

class Home extends Component {
   
    constructor(props) {
        super(props);
        this.state = { 
            list:[],
            username: '',
           

         };
      }

      dataFetch = usr =>{
        axios.get(`https://api.github.com/search/users?q=${usr}`)
        .then(response => {
            console.log(response.data);
            this.setState({list:response.data.items,
            username:response.data.items.login})
            
        })
        .catch(error => {
          console.log(error);
        });
      }

    componentDidMount() {
       this.dataFetch("");
        
    }

    cardsfunc = () =>{
        if(this.state.list.length===0 && this.state.username!==''){
            return <div style={{backgroundColor:'#F5B7B1',width:'400px',height:'60px',
            borderRadius:'5px',padding:'15px 0 0 70px',margin:'0 0 0 450px'}}>No Users Found with this Username</div>
        }
        let userlist=  this.state.list.map((item,i)=>{
          return   ( <Cards username={item.login} 
          image={item.avatar_url} 
          github={item.html_url}/>
          )
        });
    
        return userlist;
  }
    
    render() { 
        return ( 

            <div>
            
            <Form searchValue={this.dataFetch}/>
   
            <div >{this.cardsfunc()}</div>
            </div>  
            
        );
    }
}
 
export default Home;