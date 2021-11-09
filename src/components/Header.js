import { SiDeliveroo } from "react-icons/si";

const Header = ({ name, description, picture }) => {
  return (
    <header className="container headers">
      <div className="margin">
        <div className="header-logo">
          <SiDeliveroo size={45} style={{ color: "#00cdbd" }} />
          <span className="logo-text">deliveroo</span>
        </div>
        <div className="header-nav">
          <div>
            <h1>{name}</h1>
            <p className="introducing">{description}</p>
          </div>
          <img className="header-picture" src={picture} alt={name} />
        </div>
      </div>
    </header>
  );
};

export default Header;

/* On ne peut pas passer 2 props, ou on ne peux pas passer a un petit enfant une props ? */
