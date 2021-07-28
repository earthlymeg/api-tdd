import './card.css';

function RecipeItem({ name, image }) {
  return (
  

    <div class="card">
      <img src={image} alt=""/>
      <div class="container">
        <h4>
          <b>{name}</b>
        </h4>
        {/* <p>{description}</p> */}
      </div>
    </div>
  );
}

export default RecipeItem;
