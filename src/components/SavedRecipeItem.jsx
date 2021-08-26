import '../styles/card.css';

function SavedRecipeItem({ name, image, localId, id, handleDelete }) {
  return (
  

    <div class="card">
      
  
      <img src={image} alt=""/>
      <div class="container">
        <h4>
          <b>{name}</b>
        </h4>
        <button
        onClick={() => handleDelete(id, localId)}
        >Delete</button>
      </div>
    </div>
  );
}

export default SavedRecipeItem;
