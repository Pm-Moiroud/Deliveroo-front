import Meal from "./Meal";

const Content = ({ name, meals, basket, setBasket }) => {
  return (
    <main>
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
    </main>
  );
};

export default Content;
