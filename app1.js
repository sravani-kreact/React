import React from "react";
import ReactDOM from "react-dom";

const heading=  React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},[React.createElement("h1",{id:"heading"},"Hello World in ReactJs"),React.createElement("h2",{id:"heading2"},"Hello World in ReactJs")])); 
const root = ReactDOM.createRoot(document.getElementById("root"));


//JSX HTMl like Syntax
const Jsxheading = function ()
 { return (<h1 id="jsxheading" className="head" tabIndex={5}>Hello World in jsxheading</h1>);
}

const number= 10000

//React Functional Component
const HeadingComponent=()=> {return (<div id="container">

<h2>{number}</h2>
<b>{100+100}</b>
<h1  id= "container" className="heading">Hello Functional Component</h1>
</div>)
}
const reactElement= (
    <div>
        <h1 id="elem">i am a react element</h1>
    <HeadingComponent/>
     
     </div>
     )
     

root.render(reactElement);

//root.render(<HeadingComponent/>);
