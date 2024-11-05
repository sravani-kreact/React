import { useRouteError } from "react-router-dom";
const Error =()=>{
const err= useRouteError();
console.log(err);
    return(
<div>
    <h1>OOPS!!! Something Went Wrong</h1>
</div>
)}
//    <h2>{err.error.message}</h2>

export default Error;