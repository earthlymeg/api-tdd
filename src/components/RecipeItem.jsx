import '../styles/card.css';

function RecipeItem({ name, image, handleSave }) {
  return (
  

    <div class="card">
      <img src={image} alt=""/>
      <div class="container">
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
