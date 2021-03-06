export default class Helpers {
  structureRecipe(drink) {
    let ingredients = [];
    for (let i = 0; i < 15; i++) {
      let ingredient = {}
      if ((drink["strIngredient" + i] != null) && (drink["strIngredient" + i] != '')) {
        ingredient.name = drink["strIngredient" + i];
      }
      if ((drink["strMeasure" + i] != null) && (drink["strIngredient" + i] != '')) {
        ingredient.amount = drink["strMeasure" + i];
      }
      if (ingredient.name != null) {
        ingredients.push(ingredient)
      }
    }
    return {
      id: parseInt(drink.idDrink, 10),
      image: drink.strDrinkThumb,
      instructions: drink.strInstructions,
      ingredients: ingredients,
      name: drink.strDrink
    };
  }
}
