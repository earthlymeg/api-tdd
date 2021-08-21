import '../styles/card.css';

function SavedRecipeItem({ name, image, id, handleDelete }) {
  return (
  

    <div class="card">
      
      {console.log(id)}
      <img src={image} alt=""/>
      <div class="container">
        <h4>
          <b>{name}</b>
        </h4>
        <button
        onClick={() => handleDelete(id)}
        >Delete</button>
      </div>
    </div>
  );
}

export default SavedRecipeItem;
