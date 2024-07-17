import { useState, useEffect } from "react";
import "./RestaurantMenu.css";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";


const RestaurantMenu = () => {
  
  const { id } = useParams();

  const resInfo = useRestaurant(id)


  if (resInfo === null) {
    return <Shimmer />;
  }

  const {                                                                           
    name,
    cuisines,
    locality,
    avgRating,
    totalRatingsString,
    cloudinaryImageId,
  } = resInfo?.cards[2]?.card?.card?.info;
  console.log(resInfo?.cards[2]?.card?.card?.info)

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards)

  return (
    <div>
      <div className="restro-desc">
        <div className="restro-heading">
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" +
              cloudinaryImageId
            }
          />
          <p className="name">{name}</p>
          <p className="cuisine">{cuisines?.join(",")}</p>
          <p className="locality">{locality}</p>
        </div>
        <div>
          <div className="avgrating">{avgRating}</div>
          <div className="totalrating">{totalRatingsString}</div>
        </div>
      </div>
      <div>
        <ul>
          {itemCards.map((items) => (
            <li key={items.card.info.id}>
              {items.card.info.name} 
              {/* - Rs.{items.card.info.price / 100} */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
