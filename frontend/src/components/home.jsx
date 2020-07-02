import React, { Component } from 'react';
import axios from "axios";
import Cards from './cards';
import Form from './form';
import Repocards from './repocard';

class Home extends Component {
   
    constructor(props) {
        super(props);
        this.state = { 
            list:[],
            total_count:0,
            key:'',
            option:"1",
         };
      }

      componentDidMount() {
        this.dataFetch("");        
     }

     
      dataFetch = (key,option) =>{
       this.setState({k:key,option:option});
        if(option==="1"){
          axios.get(`https://api.github.com/search/users?q=${key}`)
          .then(response => {
             // console.log(response.data);
              this.setState({list:response.data.items,
              total_count:response.data.total_count})
              
          })
          .catch(error => {
            console.log(error);
          });
        }else{
          axios.get(`https://api.github.com/search/repositories?q=${key}`)
          .then(response => {
              console.log(response.data.items);
              this.setState({list:response.data.items,
                total_count:response.data.total_count})
              
          })
          .catch(error => {
            console.log(error);
          });

        }
        
      }

    cardsfunc = () =>{
      
        if(this.state.list.length===0 && this.state.total_count===0 && this.state.k!==''){
            return <div style={{backgroundColor:'#F5B7B1',width:'400px',height:'60px',
            borderRadius:'5px',padding:'15px 0 0 70px',margin:'0 0 0 450px'}}>No Result found</div>
        }
        let list=  this.state.list.map((item,i)=>{
          return this.state.option==="1"?
           <Cards username={item.login} image={item.avatar_url} github={item.html_url}/>:
          <Repocards name={item.name} /> 
        });
    
        return list;
  }

  

    
    render() { 
        return ( 

            <div>
            
            <Form placevalue={"Username/Repository"} searchValue={this.dataFetch}/>
             {this.cardsfunc()}
            
            </div>  
            
        );
    }
}
 
export default Home;