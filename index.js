const express = require('express');
var cors = require('cors')
const app = express();
app.use(cors())

app.use(express.json());

const RecipeToSave = require('./src/models/db.js');

app.options('/savedRecipes', function (req, res) {
   res.setHeader("Access-Control-Allow-Origin", "*");
   res.setHeader('Access-Control-Allow-Methods', '*');
   res.setHeader("Access-Control-Allow-Headers", "*");
   res.end();
 });


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

   newRecipe.save((err,newRecipe) =>{
      if (err) {
         console.log(err)
      } else {
         console.log('successful save')   
      }
      
   })
   
})

app.listen(3000, ()=> {
   console.log('listening on 3000')
})