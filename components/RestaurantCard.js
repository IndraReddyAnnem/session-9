const RestaurantCard = (props) => {
   
    return (
      <div className='w-56 p-2 m-2 shadow-lg bg-pink-50'>
        <img src={props.image} alt={props.name} />
        <h2 className="font-bold text-xl">{props.name}</h2>
        <h3>{props.cuisines.join(", ")}</h3>
        <h4>{props.rating} stars</h4>
        <h4>{props.deliveryTime} minutes</h4>
      </div>
    );
  };

  export default RestaurantCard;