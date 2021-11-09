import Items from "./Items";

const Basket = ({ basket, setBasket }) => {
  let total = 0;
  const taxe = 2.5;
  return (
    <div className="basket-container">
      <button className="button-basket">Valider mon panier</button>
      {basket.length === 0 && (
        <p className="empty-basket">Votre panier est vide</p>
      )}
      {basket.length > 0 && (
        <div>
          <Items setBasket={setBasket} basket={basket} />
          <div className="">
            <p className="sous-total">
              <h4>Sous-Total</h4>
              {basket.forEach((item) => {
                total = total + item.price * item.quantity;
              })}
              <span>{total.toFixed(2)} €</span>
            </p>
            <p className="frais">
              <h4>Frais de livraison</h4>
              <span>{taxe.toFixed(2)} €</span>
            </p>
          </div>
          <div className="total">
            <h5>Total</h5>
            <span>{(total + taxe).toFixed(2)} €</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;
