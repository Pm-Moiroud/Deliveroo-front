import Meal from "./Meal";

const Content = ({ name, meals }) => {
  return (
    <body className="">
      <div>
        <h3>{name}</h3>
      </div>
      <div>
        {meals.map((meal, index) => {
          return (
            <div>
              <Meal
                key={index}
                title={meal.title}
                description={meal.description}
                price={meal.price}
                picture={meal.picture}
              />
            </div>
          );
        })}
      </div>
    </body>
  );
};

export default Content;
