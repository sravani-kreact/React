import { useState, useEffect } from "react"
import MenuDetails from "./MenuDetails"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"

const RestaurantMenu=()=>{
    const {resid}=useParams();
    const menuData= useRestaurantMenu(resid)
    console.log(menuData+"line9")
    const menuItems= menuData?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card
    console.log(menuItems)//.categories[0].itemCards[0].card)

    //.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card
    //console.log(
    const menuDetail=( (menuItems?.categories?.[0]?.itemCards) || (menuItems?.itemCards)|| [])
    console.log(menuDetail)

if(!menuData)
    {
    return <div>bjkk</div>
        }
    return(
    <div className="menu">
            {menuDetail.map((x) => (
            <MenuDetails key={x.card.info.id} menuData={x.card.info} />))}
    </div>
    )
}

export default RestaurantMenu