import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { Card } from "./cards";
import { swiggyApi } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Body = () => {

  const [restaurant, setrestaurant] = useState([]);
  const [updateRest, setupdateRest] = useState([]);
  const [searchValue, setsearchValue] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(swiggyApi);
    const json = await data.json();
    const restdata =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setrestaurant(restdata);
    setupdateRest(restdata);
  };

  if(useOnlineStatus()==false){
    return <h1>Look Like You Are Offline</h1>
  }

  return restaurant&&restaurant.length == 0 ? (
    <Shimmer />
  ) :(
    <>
      <div id="body">
        <div className="search">
          <input
            type="text"
            placeholder="search for food and restaurent"
            value={searchValue}
            onChange={(e) => {
              setsearchValue(e.target.value);
            }}
          ></input>

          <button
            onClick={() => {
              const searchfilter =restaurant&&restaurant.filter((data) =>
                data.info.name.toLowerCase().includes(searchValue.toLowerCase())
              );
              setupdateRest(searchfilter);
            }}
          >
            search
          </button>
        </div>

        <div id="filterContainer">
          <button
            id="filter"
            onClick={() => {
              const rest =restaurant&&restaurant.filter((res) => res.info.avgRating > 4);
              setupdateRest(rest);
              console.log(rest);
            }}
          >
            Top rated restaurant
          </button>
        </div>

        <div id="cardcon">
          <div id="cardConatiner">
            {updateRest&&updateRest.map((carditem) => (
              <Link to={`/restaurent/${carditem.info.id}`} id="bodycard">
                <Card key={carditem.info.id} restCard={carditem} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
