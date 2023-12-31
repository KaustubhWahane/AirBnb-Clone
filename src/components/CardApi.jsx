import React, { useEffect, useState } from 'react';
 
const App = () => {
 
  const [meal_data, set_meal_data] = useState([]);
 
  const get_data = async () => {
    try {
      const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const result = await res.json();
      set_meal_data(result?.meals);
    }
    catch (err) {
      console.log(`Handling error!`);
      console.log(err);
    }
  };
 
 
  useEffect(() => {
    get_data();
  }, []);
 
  useEffect(() => {
    console.log(meal_data);
  }, [meal_data]);
 
  return (
    <div>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center"
      }} >
        {
          meal_data?.map((meal, idx) =>
            <div key={`${meal?.idMeal}`} style={{
              border: "0.5px solid black",
              margin: "10px",
              width: "250px",
              height: "350px",
              borderRadius: "16px"
            }} >
              {/* {meal?.strMeal} */}
              <div style={{
                width: "100%"
              }} >
                <img src={meal?.strMealThumb} alt={meal?.strMeal} style={{
                  width: "100%",
                  borderTopLeftRadius: "16px",
                  borderTopRightRadius: "16px",
                }} />
              </div>
              <div>
                {meal?.strMeal}
              </div>
              <div>
                {meal?.strCategory}
              </div>
              {
                console.log(meal)
              }
            </div>)
        }
      </div>
    </div>
  );
};
 
export default App;