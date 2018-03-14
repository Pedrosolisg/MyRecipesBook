import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
recipesSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Fabada Asturiana', 'This is possibly the most popular meal from the northem Spanish region Asturias.',
        'http://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/asturian-pork-and-beans-xl-r-200405.jpg', [
            new Ingredient('White Beans', 1000),
            new Ingredient('Spanish Chorizo', 2),
            new Ingredient('Lacon Ham', 1)
        ]),
        new Recipe('Cachopo', 'Breaded filet filled with ham and cheese, this is the most favourite meal for Asturas folk.',
        'https://i.pinimg.com/originals/d5/a4/02/d5a402b784a1b95deea225ce692eda97.jpg', [
            new Ingredient('Beef Filet', 1),
            new Ingredient('Iberic Ham', 4),
            new Ingredient('Cheese', 3)
        ]),
        new Recipe('Escalopines al Cabrales', 'Along with Fabada, this meal is a must in Asturas Kitchen',
        'http://fotos02.lne.es/2013/07/02/646x260/escalopines-huera-1.jpg', [
            new Ingredient('Pork Slides', 5),
            new Ingredient('Cabrales sauce', 1),
            new Ingredient('Potatoes', 4)
        ])
      ];

      constructor(private shoppingListService: ShoppingListService) {}

      getRecipes() {
          // Using slice(), we get the array info, but not the original one, but a copy of it.
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
      }
}
