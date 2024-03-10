import { cardImg } from "../utils/constant";

export const Card = (props) => {
  const { restCard } = props;
  const { cloudinaryImageId, name, avgRating, costForTwo, sla, cuisines } =
    restCard.info;
  return (
    <div id="card">
      <img src={cardImg + cloudinaryImageId} alt="dish" />
      <h4 className="info" id="restname">
        {name}
      </h4>
      <div id="ratdil">
        <h4 className="info" id="rating">
          {avgRating} &#9733;
        </h4>
        <h4 className="info" id="dilTime">
          {sla.deliveryTime}mins
        </h4>
      </div>
      <h4 className="info" id="forTwo">
        {costForTwo}
      </h4>
      <h3 className="info" id="cuisines">
        {cuisines.join(", ")}
      </h3>
    </div>
  );
};
