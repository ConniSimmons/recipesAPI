const mongoose = require('mongoose');

const recipesSchema = new mongoose.Schema({
    category: String,

    title: String,
    
    description: String,
      
    preptime: Number,
        
    ingredients: Array,

    directions: String,
      
    servesize: Number,
        
    numserve: Number,
        
    calsperserve: Number,
        
    carbsperserve: Number,
        
              
},
{ timestamps: true }
)
      
module.exports = recipesSchema;