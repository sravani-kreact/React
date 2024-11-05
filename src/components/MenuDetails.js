import RestaurantMenu from "./RestaurantMenu"

const MenuDetails=({menuData})=>{
    const{name, price,imageId, description, id}=menuData
    console.log(menuData)
    console.log("line4")
    return(
<div className="menucard">
    <ul className="description">
    <h1>{name}</h1>
    <h2 >${price/100}</h2>
    <p >{description}</p>
    </ul>
    <img className="imageId" src=
    {`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`}></img>
</div>
)}
export default MenuDetails

