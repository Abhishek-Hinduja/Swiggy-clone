export function filterRestaurantdata(searchtext, allrestaurant) {
    return allrestaurant.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase().includes(searchtext.toLowerCase())
    );
  }