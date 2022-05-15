const express = require(`express`)
const path = require('path')
const { title } = require('process')
const urllib = require('urllib')
const app = express()
app.use(express.static(path.join(__dirname,'dist')))
app.use(express.static(path.join(__dirname,'node_modules')))

//{ results: [RECIPES]
app.get('/recipes/:ingredient',function (req,res) {
    const ingredient = req.params.ingredient
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`,function name(error,response) {
    let results = JSON.parse(response.toString()).results
    if(results.length === 0){
        res.send("couldn't get anything")
    }
    else{
    results = results.map(recipe => {return{ 
        ingredients:recipe.ingredients,
        title:recipe.title,
        thumbnail:recipe.thumbnail,
        href:recipe.href,
        firstIngredient:recipe.ingredients[0]
    }})
    res.send(results)  
    }
    })
    
})



const port = 8080
app.listen(port,function () {
    console.log("server is set");
})
