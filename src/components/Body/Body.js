import React, { useEffect, useState } from "react";
import Foods from "../Foods/Foods";
import Selected from "../Selected/Selected";
import swal from "sweetalert";

const Body = ({ searchText }) => {
  const [foods, setFoods] = useState([]);
  const [bookmark, setBookMark] = useState([]);
  const [mealid, setMealId] = useState([]);
  // console.log(bookmark)
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
      .then((res) => res.json())
      .then((data) => setFoods(data?.meals))
      .catch((err) => console.log(err));
  }, [searchText]);
  const handleBookMark = (strMeal, idMeal) => {
    // console.log(idMeal)
    setMealId(idMeal);
    const info = {
      strMeal,
      idMeal,
    };
    // local storage
    const prevBookmark = localStorage.getItem("bookmark");
    const oldBookmark = JSON.parse(prevBookmark);
    if (oldBookmark) {
      const isExist = oldBookmark.find((meal) => meal.idMeal === idMeal);
      if (isExist) {
        // isExist.quanity = isExist.quanity + 1;
        localStorage.setItem("bookmark", JSON.stringify(oldBookmark));
      } else {
        localStorage.setItem(
          "bookmark",
          JSON.stringify([...oldBookmark, info])
        );
      }
    } else {
      localStorage.setItem("bookmark", JSON.stringify([info]));
    }

    if (bookmark?.length) {
      setBookMark([...bookmark, info]);
      return;
    } else {
      setBookMark([info]);
      return;
    }
  };
  if (!foods) {
    swal(`${searchText}`, "can not find your meal!");
    return;
  }

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
      <Selected bookmark={bookmark} mealid={mealid}></Selected>
    </div>
  );
};

export default Body;
