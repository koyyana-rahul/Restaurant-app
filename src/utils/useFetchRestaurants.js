import { RESTAURANT_URL } from "./constants";
import { useState, useEffect } from "react";
const useFetchRestaurants = () => {
     const [resInfo, setResInfo] = useState([]);
     useEffect(()=>{
          // console.log("rendered");
          fetchData();
     },[]);

     const fetchData = async () => {
          const data = await fetch(RESTAURANT_URL);
          const json = await data.json();

          // console.log(json);
          setResInfo(json?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards);
     }
     // console.log(resInfo);
     return resInfo;

}

export default useFetchRestaurants;