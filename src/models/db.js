const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/recipes', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log('connected!')
});

//schema to save a recipe
const recipeSchema = mongoose.Schema({
    name: String,
    image: String
})

const RecipeToSave = mongoose.model('RecipeToSave', recipeSchema)

module.exports = RecipeToSave;