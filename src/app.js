import React from "react";
import ReactDOM from "react-dom";
import Body from "./components/Body";
import Header from "./components/header";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import { AboutUs } from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout=()=>{
return (<div className="App">
    <Header/>
    <Outlet/>
</div>)
}
const appRouter= createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children: [
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<AboutUs />,
            },
            {
                path:"/contact",
                element:<ContactUs />,
            },
            {
                path:"/restaurants/:resid",
                element:<RestaurantMenu />,
            },

        ],
        errorElement:<Error />,
    }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter} />);