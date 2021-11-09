import Meal from "./Meal";
import Basket from "./Basket";

const Content = ({ name, meals, basket, setBasket }) => {
  return (
    <body className="">
      <section className="main-content">
        <div className="categories">
          <h2>{name}</h2>
        </div>
        <div className="meal-content ">
          {meals.map((meal, index) => {
            if (meal.picture) {
              return (
                <div>
                  <Meal
                    key={index}
                    meal={meal}
                    title={meal.title}
                    description={meal.description}
                    price={meal.price}
                    picture={meal.picture}
                    basket={basket}
                    setBasket={setBasket}
                  />
                </div>
              );
            }
          })}
        </div>
      </section>
    </body>
  );
};

export default Content;
