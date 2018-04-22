import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import "rxjs/Rx"
import { Observable } from "rxjs/Observable"

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";

@Injectable()
export class ServerService {
    constructor(private http: Http, private recipeService: RecipeService) {}

    storeRecipes() {
        return this.http.put('https://my-recipes-book-cedba.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }

    getRecipes() {
        return this.http.get('https://my-recipes-book-cedba.firebaseio.com/recipes.json')
        .map(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
                for (let recipe of recipes) {
                    if (!recipe['ingredients']) {
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
        )
        .subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            }
        );
        // .map(
        //     (response: Response) => {
        //         const recipes = response.json();
        //         return recipes;
        //     }
        // ).catch(
        //     (error: Response) => {
        //         return Observable.throw('Error while fertching');
        //     }
        // );
    }
}