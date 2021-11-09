import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
import { SiBlueprint } from "react-icons/si";

const Line = ({ basket, setBasket }) => {
  return (
    <>
      {basket.map((item, index) => {
        return (
          <div key={item.id} className="cart-content">
            <div className="line">
              <div className="counter">
                <div>
                  <AiFillMinusCircle
                    size={20}
                    className="minus"
                    onClick={() => {
                      const newBasket = [...basket];
                      newBasket[index].quantity = basket[index].quantity - 1;
                      setBasket(newBasket);
                      if (item.quantity < 1) {
                        const newBasket = [...basket];
                        newBasket.splice(index, 1);
                        setBasket(newBasket);
                      }
                    }}
                  />
                  <span className="quantity">{item.quantity}</span>

                  <AiFillPlusCircle
                    className="max"
                    size={20}
                    onClick={() => {
                      const newBasket = [...basket];
                      newBasket[index].quantity = basket[index].quantity + 1;
                      setBasket(newBasket);
                    }}
                  />
                </div>
                <p className="item-title">{item.title}</p>

                <div>
                  <p className="item-price">
                    {(item.price * item.quantity).toFixed(2)} €
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Line;
