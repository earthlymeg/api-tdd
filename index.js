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


// app.get('/', (req,res) => {
//    //save recipes to database
//   res.send('hello') 
// })

app.get('/savedRecipes', (req,res) => {
   RecipeToSave.find( (err, recipes) => {
      if (err) {
         console.log(err)
      } else {
         res.send(recipes)
      }
   })
})


app.post('/savedRecipes', (req,res) => {
   //save recipes to database
   let newRecipe = new RecipeToSave({
      name: req.body.name,
      image: req.body.image,
      localId: req.body.localId
   })

   newRecipe.save((err,newRecipe) =>{
      if (err) {
         console.log(err)
      } else {
         console.log('successful save')   
      }
      
   })
   
})

app.delete('/savedRecipes/:id', (req,res) => {
   let id = req.params.id;
   
   RecipeToSave.deleteOne({_id: id})
   .then( () => res.send(`successfully deleted ${id}`))
   .catch(err => console.log(err))


})

app.listen(3001, ()=> {
   console.log('listening on 3001')
})