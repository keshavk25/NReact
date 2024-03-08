import { useState } from "react";
import { restaurants } from "../utils/mockdata";
import { Card } from "./cards";

export const Body=()=>{

    const [restaurant,setrestaurant]=useState(restaurants)

    return(
    <>
    <div id="search">
        <input type="text" placeholder="search for food and restaurent"></input>
        <button>search</button>
    </div>
    <div id="filterContainer">
        <button id="filter" onClick={()=>{
            const rest =restaurant.filter((res)=>res.info.avgRating>4.4);
            setrestaurant(rest)
            console.log(restaurant);
        }}>Top rated restaurant</button>
    </div>
        

    <div id="cardcon">

    <div id="cardConatiner">
    {
        restaurant.map((carditem)=> (
        <Card key={carditem.info.id} restCard={carditem}/>
        ))
    }
    </div>

    </div>
    </>)
}

