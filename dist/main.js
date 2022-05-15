
class Controller{
    constructor(){
        
    }
    getStats(){
        // $.get(`playerStats/${playerlastName}/${playerFirstName}`,(playerStats)=>{
        //     console.log(playerStats);
        // })
    }

    setRecipe(render,callback){
        $(".grid-container").on("click",".recipePicture",function(){
            alert($(this).closest(".recipe").attr("data-firstIngredient"));
        })
    }

    initialaize(render){
        $(".search").on("click", function(){
            $('.recipe').remove()
            let ingredient= $("#chooseRecipe").val()
            $.get(`recipes/${ingredient}`, (listOfRecipes)=>{
                if("couldn't get anything"=== listOfRecipes){
                    alert("Unfortunatelly We Don't have any recipe that matches your Ingredient Please choose another recipe ")
                }else{
                render.renderRecpies(listOfRecipes)
                }
            })
        })
       
    
    }
}
const render = new ViewPlayers()
const controller = new Controller()
// controller.initialaize(render)
controller.setRecipe(render,controller.initialaize(render))
