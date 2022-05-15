class ViewPlayers{
    constructor(){
        let source = $("#recipe-template").html()
        this.recipeTemplate = Handlebars.compile(source)
        source = $("#popUp-template").html()
        this.popUpTemplate = Handlebars.compile(source)
        this.recipeList = $(".grid-container")
        
    }

   
    renderRecpies(listOfRecipes){
        for(let recipe of listOfRecipes){
            const newHtml = this.recipeTemplate(recipe)
            this.recipeList.append(newHtml)
            }
        }


}