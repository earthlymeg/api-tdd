import { BsBookmark } from "react-icons/bs/";
import { AiOutlineHome } from "react-icons/ai";
import "../styles/footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    // <div >
    <footer className="footer">
      <Link to="/home">
        <AiOutlineHome className="bookmark"/>
      </Link>
      <Link to="/savedRecipes">
        <BsBookmark className="bookmark" />
      </Link>
    </footer>
    // </div>
  );
}

export default Footer;
