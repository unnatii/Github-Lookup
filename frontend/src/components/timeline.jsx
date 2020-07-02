import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const timeline = ({data}) => {
  
  const timelineElements = () =>{
      // console.log('*',data);
     return data.sort((a, b) => b.id - a.id).map((item)=>{
      return   <VerticalTimelineElement
        className="vertical-timeline-element--work"
        style={{position:'relative'}}
        date={item.created_at.substring(0,10)}  
        contentStyle={{ background: '#C1BEBE', color: 'black' }}
        contentArrowStyle={{ borderRight: '7px solid  #C1BEBE' }}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
         
      <h4  className="vertical-timeline-element-title">{item.name}</h4>
      <a href={item.html_url}><h6 className="vertical-timeline-element-subtitle">{item.full_name}</h6></a>
        
        {item.description?<p>{item.description}</p>:""}
        
        <br/>
        <br/>
     {item.language?<span style={{margin:"0 40px 0 0" ,position:'relative', bottom:"0", left:"0",fontSize:"10px"}}> {item.language}</span>
        :""}
         
     <span style={{margin:"0 40px 0 0" ,position:'relative', bottom:"0", right:"0",fontSize:"10px"}}>Updated on {item.updated_at.substring(0,10)}</span>
      </VerticalTimelineElement>
      })
  }

    return ( <VerticalTimeline>
      {console.log(data)}
        {timelineElements()}
      </VerticalTimeline> );
}
 
export default timeline; 



