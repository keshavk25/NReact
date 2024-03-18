import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
    }
  

    componentDidMount(){
    }


    render(){
        return(
            <>
            <h1>About us page</h1>
            <UserClass name={"Keshav"} location={"Hisar"}/>
            </>
        )
        }
}

export default About;