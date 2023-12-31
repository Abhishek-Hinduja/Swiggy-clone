import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterRestaurantdata(searchtext, allrestaurant) {
  return allrestaurant.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase().includes(searchtext.toLowerCase())
  );
}

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
    const restaurants = fetched?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setallrestaurant(restaurants);
    setfilterrestaurant(restaurants);
    
  }

  return allrestaurant?.length === 0 ?
  <Shimmer/> : (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="Search-input"
          value={searchtext}
          onChange={(e) => {
            setsearchtext(e.target.value);
          }}
        />
      </div>
      <div className="search-button">
        <button
          type="button"
          onClick={() => {
            const filteredData = filterRestaurantdata(searchtext.toLowerCase(), allrestaurant);
            setfilterrestaurant(filteredData);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
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

