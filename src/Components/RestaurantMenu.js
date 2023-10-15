import { useState, useEffect } from "react";
import "./RestaurantMenu.css";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { swiggy_menu_api_URL } from "../Constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const API = swiggy_menu_api_URL + id;
    const data = await fetch(swiggy_menu_api_URL + id);

    const json = await data.json();
    console.log(json.data);
    setResInfo(json.data);
  };

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
  } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div>
      <div className="restro-desc">
        <div className="restro-heading">
          <img
            src={
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
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
              {items.card.info.name} - Rs.{items.card.info.price / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
