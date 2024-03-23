import { cardImg } from "../utils/constant";

const Card = (props) => {
  const { restCard } = props;
  const { cloudinaryImageId, name, avgRating, costForTwo, sla, cuisines,aggregatedDiscountInfoV3 } =
    restCard.info;
  return (
    <div className="">
      <img className="rounded-3xl h-48 w-64" src={cardImg + cloudinaryImageId} alt="dish" />
      <h4 className="mx-4 my-2 text-lg font-medium">
        {name}
      </h4>
      <div className="flex">
        <h4 className="flex mx-4">
          {avgRating} <p className="text-green-800">&#9733;</p>
        </h4>
        <h4 className="ml-8">
          {sla.deliveryTime}mins
        </h4>
      </div>
      <h4 className="mx-4">
        {costForTwo}
      </h4>
      <h3 className="mx-4">
        {cuisines.join(", ")}
      </h3>
     {console.log(aggregatedDiscountInfoV3.header)}
     {console.log(aggregatedDiscountInfoV3.subHeader)}
    </div>
  );
};


export default Card;