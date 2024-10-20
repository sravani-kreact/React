const heading=  React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},[React.createElement("h1",{id:"heading"},"Hello World in ReactJs"),React.createElement("h2",{id:"heading2"},"Hello World in ReactJs")])); 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


