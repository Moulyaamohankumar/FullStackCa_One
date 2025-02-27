import React from "react";
import { useState } from "react";

export const Testimonial = () =>{
    const[name,setName] = useState('');
    const[reviews,setReviews] = useState(' ');


    return(
        <>
        <div className="Card1">
        <h1>Name</h1>
        <input type="text" value={name} onChange={() => setName((e)=>e.target.name)}
        ></input>
            <h1>Reviews</h1>
            <input type="type" value={reviews} onChange={()=>setReviews((e)=>e.target.reviews)}></input>
        </div>
        <div className="Card2">
        <h1>Name</h1>
        <input type="text" value={name} onChange={() => setName((e)=>e.target.name)}
        ></input>
            <h1>Reviews</h1>
            <input type="type" value={reviews} onChange={()=>setReviews((e)=>e.target.reviews)}></input>
        </div>
        </>
    

    )
}



