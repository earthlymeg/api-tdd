const express = require('express');
const app = express();
app.use(express.json());

const RecipeToSave = require('./src/models/db.js');


app.get('/', (req,res) => {
   //save recipes to database
  res.send('hello') 
})


app.post('/savedRecipes', (req,res) => {
   //save recipes to database
   let newRecipe = new RecipeToSave({
      name: req.body.name,
      image: req.body.image
   })
   console.log(req.body)
   res.send(req.body)

   // RecipeToSave.save((err,newRecipe) =>{
   //    if (err) {
   //       console.log(err)
   //    } else {
   //       console.log('successful save')   
   //    }
      
   // })
})

app.listen(3000, ()=> {
   console.log('listening on 3000')
})