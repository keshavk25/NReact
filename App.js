import React from "react";
import  ReactDOM  from "react-dom/client";

// const jsxHeading=[<h1>this is JSX  heading</h1>,
//                  <h1>this is JSX  heading   222</h1>,
//              <p>Lorem ipsum dolor sit.</p>,
//              <table>
//                 <td>hi this is keshav</td>
//              </table>
// ]

// const Head=()=>  {  <p>    This is paragraph tag inside functional component   </p>    } ......Not run

// const Head=()=>   <p>    This is paragraph tag inside functional component    </p>       ......RUn
// const Head= ()=>  ( <p>    This is paragraph tag inside functional component    </p> )    ......RUn
const Head=()=>{ return <p>This is paragraph tag inside functional component</p>} 
  
 const sp=(<p><span>Hi this span</span></p>);
 
 
 const para=(
     <>
     <p>hi</p>
     {sp}
     </>
 )
 const HeadingComponent=()=> (
     <>
         {/* <Head/> */}
         <h2>{console.log("HI keshav")}</h2>
         {100+211}
         {para}
         {Head()}
         <Head></Head>
         <Head/>
        <h1> This is functional component</h1>
        </>
 )

// const HeadingComponent=()=> {
//    <h1> This is functional component</h1>
// }           
// ......Not run 
// for run use ()


const root=ReactDOM.createRoot(document.getElementById("div1"));
root.render(<HeadingComponent/>);
root.render(<Head/>);
