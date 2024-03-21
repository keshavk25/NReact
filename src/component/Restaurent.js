import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const Restaurent = () => {
  const { restid } = useParams();

const restInfo=useRestaurentMenu(restid);

  if (restInfo === null) return <Shimmer />;

  const { id, name, avgRating, costForTwo, cuisines } =
    restInfo?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  return (
    <>
      <p>Restaurent ID: {id}</p>
      <h1>Name: {name}</h1>
      <h1>Rating: {avgRating}</h1>
      <p>Cost For Two: {costForTwo / 100}</p>

      <h3>Cuisines : {cuisines.join(", ")}</h3>

      <div>
        <h2>Recommded : </h2>
        <ul>
          {itemCards&&itemCards.map((item) => (
            <li key={item.card.info.id}>
              {" "}
              {item.card.info.name} - {item.card.info.price / 100}{" "}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Restaurent;
