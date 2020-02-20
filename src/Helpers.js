export default class Helpers {
  structureRecipe(drink) {
    let ingredients = [];
    for (let i = 0; i < 15; i++) {
      let ingredient = {}
      if (drink["strIngredient" + i] != null) {
        ingredient.name = drink["strIngredient" + i];
      }
      if ((drink["strMeasure" + i] != null) || (drink["strMeasure" + i] != undefined)) {
        ingredient.amount = drink["strMeasure" + i];
      }
      if (ingredient.name != null) {
        ingredients.push(ingredient)
      }
    }
    return {
      name: drink.strDrink,
      image: drink.strDrinkThumb,
      instructions: drink.strInstructions,
      ingredients: ingredients
    };
  }
}
