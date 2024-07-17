const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h2>{cuisines.join(", ")}</h2>
      <h2>{avgRating} stars</h2>
    </div>
  );
};

export default RestaurantCard;
