import {BsBookmark} from 'react-icons/bs/'
import '../styles/footer.css'
import { Link } from
  "react-router-dom";
function Footer() {

    return(
        <div className="footer">
            <Link to="/savedRecipes"><BsBookmark className="bookmark"/></Link>
            
        </div>
    )

}

export default Footer;