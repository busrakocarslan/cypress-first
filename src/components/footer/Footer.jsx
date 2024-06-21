import "./Footer.css";
import bird from "../../assets/bird-2724144_640.png";

const Footer = () => {
  return (
    <div className="footer-div">
      <a
        href="https://github.com/busrakocarslan"
        target="_blank"
        rel="noopener noreferrer"
        
        style={{ textDecoration: "none" }}
      >
        <div className="brand">KCRSLN</div>
        
      </a>
      <img
        src={bird}
        alt="design"
        style={{ width: "40px", margin: "0  25px 0 10px" }}
      />
      <span
        >Copyright {new Date().getFullYear()}
      </span>
    </div>
  );
};

export default Footer;