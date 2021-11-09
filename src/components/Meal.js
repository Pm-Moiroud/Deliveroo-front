const Meal = ({
  title,
  description,
  price,
  picture,
  basket,
  meal,
  setBasket,
}) => {
  const handleClick = (meal) => {
    if (basket.indexOf(meal) === -1) {
      meal.quantity = 1;
      const newBasket = [...basket];
      newBasket.push(meal);
      setBasket(newBasket);
    } else {
      meal.quantity += 1;
      const newBasket = [...basket];
      setBasket(newBasket);
    }
  };

  return (
    <div
      onClick={() => {
        handleClick(meal);
      }}
    >
      <section onClick={(event) => {}} className="flex-section">
        <div className="meal-description">
          <h3 className>{title}</h3>
          <p className="meal-p">{description}</p>
          <span>{price} €</span>
        </div>

        <div>
          <img src={picture} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Meal;
