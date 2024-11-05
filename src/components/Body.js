import RestuarantCards from "./RestuarantCards";
import resList from "../utils/mockData";
///import { ListOfRes } from "../utils/mockDataSwiggy";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body=()=>{
  console.log("line8")

  //const list=ListOfRes.restaurants
  const [restuarantLists, setRestuarantLists]= useState([])
  const [searchText, setSearchText]= useState("") 
  const [filteredRes,setFilteredRes]= useState([])

 useEffect(()=>{
     fetchData();
     console.log("useEffect")

    },[]);
 const fetchData= async () => {
  const response = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const data = await response.json();
  const restaurants=data?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants
  console.log(restaurants);
  setRestuarantLists(restaurants);
  setFilteredRes(restaurants);
  console.log("fetchData")

};
const onLineStatus= useOnlineStatus();
if(onLineStatus===false)
return(
  <h1>Please check your internet connection</h1>
)

if (restuarantLists.length===0){
  return(
    <div>  {console.log("shimer")}

      <Shimmer></Shimmer>
</div>
  )
}
    return (
      
  <div className="body">   {console.log("line41")}

    <div className="filter">
    <div className="Search">
      <input 
      type="text" 
      className="search-box"
      value={searchText}
      onChange={(e)=>{
         setSearchText(e.target.value)
         console.log("in Search Text")
      }
      }
      />
      <button 
      onClick={()=>
        {
          const filteredList=restuarantLists.filter
          ((x)=>x.info.name.toLowerCase().includes(searchText.toLowerCase()));
          setFilteredRes(filteredList);
          console.log(filteredList)
          console.log(setFilteredRes)
          console.log("in Search button")

        }}>
      search</button>
      </div>
      <button 
      className="filterBtn" 
      onClick={()=>{
        const filteredResList=restuarantLists.filter(
        (x)=>(x.info.avgRating>4.5))
        setFilteredRes(filteredResList);
        console.log(filteredResList)
        console.log(filteredResList)
        console.log("in filterBtn")

      }}>
        Top-Rated Restuarants

        </button>
        </div>
      <div className= "res-cards"
      >{console.log("inbody")}

        {
          filteredRes.map((x) => (
            <Link 
            key = {x.info?.id} 
            to={"/restaurants/"+x.info?.id}
            >
          < RestuarantCards  resData={x} />
          </Link>
        ))}
      </div>
  </div>)
  }

  export default Body;