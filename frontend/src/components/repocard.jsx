import React, { Component } from 'react';

class Repocards extends Component {
    //const username =this.props ;
    render() { 
        return ( 
    <div style={{backgroundColor:'#EAECEE ',width:'1100px',height:'100px',margin:'30px 0 0 80px'}}>
    
    
    <span style={{margin:'30px 50px 0 20px'}}><strong>Name : </strong>{this.props.name}</span>
   

            </div>
         );
    }
}
 
export default Repocards;