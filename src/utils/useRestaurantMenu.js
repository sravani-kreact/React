import { useEffect, useState } from "react"

const useRestaurantMenu=(resid)=>{
const [menu, setMenu]= useState(null)
useEffect(()=>{
    
    fetchData();
},[resid])

const fetchData= async()=>{
        const response= await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4258246&lng=78.5482153&restaurantId="+resid+"&catalog_qa=undefined&submitAction=ENTER")
        const data= await response.json();
        setMenu(data)
} 
return menu
}

export default useRestaurantMenu