import { FaReact } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer container">
        <span>
          Made by <span className="span-bold">Pierre-matisse</span> at{" "}
          <span className="span-bold"> Le Reacteur</span>{" "}
          <FaReact size={20} style={{ color: "blue", marginLeft: "10px" }} />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
