import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Card } from "./cards";
import { swiggyApi } from "../utils/constant";

export const Body = () => {
  const [restaurant, setrestaurant] = useState([]);
  const [updateRest, setupdateRest] = useState([]);
  const [searchValue, setsearchValue] = useState("");

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch(swiggyApi);
    const json = await data.json();
    //    console.log(json);
    const restdata =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setrestaurant(restdata);
    setupdateRest(restdata);
    //    console.log(restdata);
  };

  return restaurant.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div id="body">
        <div className="search">
          <input
            type="text"
            placeholder="search for food and restaurent"
            value={searchValue}
            onChange={(e) => {
              setsearchValue(e.target.value);
              // console.log("change");
            }}
          ></input>

          <button
            onClick={() => {
              const searchfilter = restaurant.filter((data) =>
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
              const rest = restaurant.filter((res) => res.info.avgRating > 4);
              setupdateRest(rest);
              console.log(rest);
            }}
          >
            Top rated restaurant
          </button>
        </div>

        <div id="cardcon">
          <div id="cardConatiner">
            {updateRest.map((carditem) => (
              <Card key={carditem.info.id} restCard={carditem} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
