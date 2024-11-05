import RestaurantMenu from "./RestaurantMenu"

const MenuCard=({menuData})=>{
    const{name, price}=menuData
    console.log(menuData)
    console.log("line4")
    return(
<div className="menucard">
    <h1>{name}</h1>
    <h2>${price}</h2>
</div>
)}
export default MenuCard

