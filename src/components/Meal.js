const Meal = ({ title, description, price, picture }) => {
  return (
    <div className="container">
      <h4>{title}</h4>
      <p>{description}</p>
      <span>{price} €</span>
      <img src={picture} alt="" />
    </div>
  );
};

export default Meal;
