import "../styles/card.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

function RecipeItem({ name, image, handleSave, id, favorited }) {
  
  //on click of recipe item, take to recipe page that has back arrow to go back to all recipes 

  return (
    <div className="card">
      <div className="img-overlay">
        <img src={image} alt="" />
        {!favorited ? (
          <AiOutlineHeart
            className="outline-heart"
            onClick={() => handleSave(name, image, id)}
          />
        ) : (
          <AiFillHeart className="outline-heart" />
        )}
      </div>
      <div className="container">
        <h4>
          <b>{name}</b>
        </h4>
      </div>
    </div>
  );
}

export default RecipeItem;
