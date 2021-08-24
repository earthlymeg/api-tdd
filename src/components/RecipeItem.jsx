import '../styles/card.css';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'

function RecipeItem({ name, image, handleSave }) {
  return (
  

    <div className="card">
      <div className="img-overlay">
      <img src={image} alt=""/>
      <AiOutlineHeart className="outline-heart"/>
      </div>
      <div className="container">
        <h4>
          <b>{name}</b>
        </h4>
        <button
        onClick={() => handleSave(name, image)}
        >Save Recipe</button>
      </div>
    </div>
  );
}

export default RecipeItem;
