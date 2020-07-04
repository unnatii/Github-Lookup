import React from 'react';

const userprofile = (props) => {
    const {avatar_url,login,html_url,followers,following,bio,email,location}=props.prop
     
    return (  <div style={{backgroundColor:'#EAECEE ',width:'1100px',height:'500px',lineHeight:'50px',
    margin:'30px 0 50px 80px'}}>
    <img style={{width:'300px',height:'400px',margin:'50px'}} alt="" 
    src={avatar_url}/>
    <div style={{float:"right" ,backgroundColor:'#D5D8DC ',width:'600px',margin:'50px',
    height:'400px'}}>
    <span style={{margin:'30px 50px 0 20px'}}><strong>Username : </strong>{login}</span><br/>
    <span style={{margin:'30px 50px 0 20px'}}><strong>Github Profile : </strong> <a href={html_url}>{html_url} </a></span><br/>
    <span style={{margin:'30px 50px 0 20px'}}><strong>Bio : </strong>{bio}</span><br/>
    <span style={{margin:'30px 50px 0 20px'}}><strong>Email : </strong>{email}</span><br/>
    <span style={{margin:'30px 50px 0 20px'}}><strong>Location : </strong>{location}</span><br/>
    <span style={{margin:'30px 50px 100px 20px'}}><strong>Followers : </strong>{followers}</span><br/>
    <span style={{margin:'30px 50px 0 20px'}}><strong>Following : </strong>{following}</span><br/>
    
    </div>
    </div> );
}
 
export default userprofile;