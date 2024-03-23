import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import  Card  from "./Cards";
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
      <div className="flex justify-center items-center flex-wrap " >
        <div className="flex justify-center items-center w-full m-4 ">
          <input
            className="border border-solid border-black rounded-l-lg w-[500px] h-[40px] p-5" 
            type="text"
            placeholder="search for food and restaurent"
            value={searchValue}
            onChange={(e) => {
              setsearchValue(e.target.value);
            }}
          ></input>

          <button
            className="border border-solid border-black rounded-r-lg w-[100px] h-[40px]"
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

        <div className="flex justify-center items-center w-full mb-4 " >
          <button
            className="border border-solid border-black rounded-lg w-64 h-8"
            onClick={() => {
              const rest =restaurant&&restaurant.filter((res) => res.info.avgRating > 4);
              setupdateRest(rest);
              console.log(rest);
            }}
          >
            Top rated restaurant
          </button>
        </div>

        <div className="">
          <div className="flex w-[1100px] flex-wrap justify-between">
            {updateRest&&updateRest.map((carditem) => (
              <Link className="w-[250px] " to={`/restaurent/${carditem.info.id}`} id="bodycard">
               
                <Card key={carditem.info.id} restCard={carditem} />
               
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
