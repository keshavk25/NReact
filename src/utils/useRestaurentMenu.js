import { useEffect, useState } from "react";
import { restdata } from "./constant";

const useRestaurentMenu=(restId)=>{

    const [restInfo,setrestInfo]=useState(null);

        useEffect(()=>{
            fetchData();
        },[]);
    
    const fetchData=async()=>{
        const data=await fetch(restdata+restId);
        const json= await data.json();
        setrestInfo(json);
    
    }

    return restInfo;
    }

    export default useRestaurentMenu;
    
    