import React from 'react';
import information from './Data';
import { useState } from 'react';
import './Corses.css';
import Topic from '../topic/Topic';
import Cart from '../Cart/Cart';

const Corses = () => {
    const first15 = information.slice(0,14);
    const[subjects, setsubjects ] = useState(first15);
    const [cart,setCart]= useState([]);

    const handleAddTopic = (topic)=>{
        const newCrt=[...cart,topic];
        setCart(newCrt);
    }

    return (
        <div className= "corse-container">
    <div className="subjects-container">
          
     {
        subjects.map(subjects => <Topic
             handleAddTopic={handleAddTopic}
             topic ={subjects}>
             </Topic>)
     }
            
    </div>
    <div className="cart-container">
    <Cart cart={cart}></Cart>
    </div>
        </div>
    );
};

export default Corses;