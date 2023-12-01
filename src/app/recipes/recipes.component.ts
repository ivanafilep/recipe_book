import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService){}

  // So here in "NgOnInit()", for example, I can set up my listener. So, on the recipe selected, I can subscribe to it, and get informed about any changes.
  //And now here, I know I will receive some data, which is of type recipe, because that's how we configure the event emitter. It will give us a recipe.
  //And in this ES six arrow function here, that is the argument list, and here is the function body. Here, I simply want to set this select recipe equal,
  //to the recipe we got with the event.
  ngOnInit(){
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe
      }
    );

  }

}
