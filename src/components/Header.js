import { useState } from "react"
import {LOGO} from "../utils/constants"
import { AboutUs } from "./AboutUs"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{
    const [btnName, setBtnName]= useState("login")
    const onLineStatus=useOnlineStatus();
    return (
    <div className="header">
        <div>
          <img className="logo" src={LOGO} />
        </div> 
        <div className="nav-items"> 
            <ul>
                <li> onLineStatus: {onLineStatus?yes:No}</li>
                <li>Home</li>
                <li>
                    <Link to="/about">About US</Link>
                </li>
                <li>
                    <Link to="/contact">Contact US</Link>
                </li>
                <li>Cart</li>
                <button className="login" 
                onClick={()=>{
                    btnName==="login"?
                    setBtnName("logout"):
                    setBtnName("login");
                }}
                >{btnName}</button>
            </ul>
        </div>
    </div>)
    }

    export default Header