import React, { useEffect, useState } from "react";
import Foods from "../Foods/Foods";
import Selected from "../Selected/Selected";

const Body = ({ searchText }) => {
    const [foods, setFoods] = useState([]);
    const [bookmark, setBookMark] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
      .then((res) => res.json())
      .then((data) => setFoods(data?.meals))
      .catch((err) => console.log(err));
  }, [searchText]);
  const handleBookMark = (strMeal) => {
    // setBookMark(strMeal);
    const info = {
      strMeal
    }
    
    if (bookmark?.length) {
      setBookMark([...bookmark, info]);
      return;
    } else {
      setBookMark([info]);
      return;
    }
    
    
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4 p-4">
        {foods.map((food) => (
          <Foods
            food={food}
            key={food.idMeal}
            handleBookMark={handleBookMark}
          ></Foods>
        ))}
      </div>
      <Selected bookmark={bookmark}></Selected>
    </div>
  );
};

export default Body;
