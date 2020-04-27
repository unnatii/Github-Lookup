import React, { Component } from 'react';
import { Link} from 'react-router-dom'; 
class Cards extends Component {
    //const username =this.props ;
    render() { 
        return ( 
    <div style={{backgroundColor:'#EAECEE ',width:'1100px',height:'100px',margin:'30px 0 0 80px'}}>
    <img style={{width:'80px',height:'80px',margin:'10px 20px 0 10px'}}alt="" src={this.props.image}/>
    
    <span style={{margin:'30px 50px 0 20px'}}><strong>Username : </strong>{this.props.username}</span>
    <span style={{margin:'0 50px 0 0'}}><strong>Github Profile : </strong> <a href={this.props.github}>{this.props.github} </a></span>
           <Link to={`/${this.props.username}`}><span><strong>More info</strong></span></Link>

            </div>
         );
    }
}
 
export default Cards;

