import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterRestaurantdata } from "../utils/helper"
import useOnline from "../utils/useOnline";

const Body = () => {
  const [searchtext, setsearchtext] = useState("");
  const [allrestaurant, setallrestaurant] = useState([]);
  const [filterRestaurant, setfilterrestaurant] = useState([]);

  useEffect(() => {
    getAllRestaurant();
  }, []);

  async function getAllRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const fetched = await data.json();
    const restaurants = fetched?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setallrestaurant(restaurants);
    setfilterrestaurant(restaurants);
    
  }
  
  const online = useOnline()

  if (!online){
    return <h1>You are offline please check your internet connection</h1>
  }

  return allrestaurant?.length === 0 ?
  <Shimmer/> : (
    <>
      <div className="search-container p-5 bg-pink-100 my-5">
        <input
          type="text"
          placeholder="Search"
          className="Search-input"
          value={searchtext}
          onChange={(e) => {
            setsearchtext(e.target.value);
          }}
        /> Search
      </div>
      <div className="search-button">
        <button
          type="button"
          onClick={() => {
            const filteredData = filterRestaurantdata(searchtext.toLowerCase(), allrestaurant);
            setfilterrestaurant(filteredData);
          }}
        >
          
        </button>
      </div>
      <div className="flex flex-wrap">
      {
        filterRestaurant?.map((restaurant) => {
          return (
             <Link to = {"/restaurant/" + restaurant?.info?.id
} key={restaurant.info.id}> <RestaurantCard {...restaurant.info}/> </Link>
            )})
        }
         
        
      </div>
    </>
  );
};

export default Body;

