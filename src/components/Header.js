import { SiDeliveroo } from "react-icons/si";
import Restaurant from "./Restaurant";

const Header = ({ name, description, picture }) => {
  console.log(description);
  return (
    <header>
      <div className="deliveroo container ">
        <SiDeliveroo size={45} style={{ color: "#00cdbd" }} />{" "}
        <span className="name">deliveroo</span>
      </div>
      <div className="container">
        <h1>{name}</h1>
        <p>{description}</p>
        <img className="header-picture" src={picture} alt={name} />
      </div>
    </header>
  );
};

export default Header;

/* On ne peut pas passer 2 props, ou on ne peux pas passer a un petit enfant une props ? */
