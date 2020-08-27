import React from 'react';
import './Topic.css';

const Topic = (props) => {
    // console.log(props);
    const {img, name,type,time,prise,}= props.topic;
    return (
        <div className="full-topic">
           <div>
            <img src={img} alt=""/>
           </div>
           <div className="corses-info">
             <h4 className="topic-name">{name}</h4>
             <p><small>Type: {type}</small></p>
             <p><small>Time: {time}</small></p>
             <p><strong>Prise: ${prise}</strong></p>
             <button className="btn btn-outline-warning"
             onClick={()=>props.handleAddTopic(props.topic)}
             ><strong>Enrole Now</strong></button>
           </div>
           <div>
           </div>
        </div>
    );
};

export default Topic;