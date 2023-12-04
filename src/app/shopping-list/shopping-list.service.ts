import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
//ovaj ingredients nije isti kao list ingredients u shopping-list component
//mislim na sam naziv, ne mora se zvati isti, vec kako hocu ja
export class ShopingListService{
    ingredientChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Meso', 1),
        new Ingredient('Luk', 1),
        new Ingredient('Ulje', 0.5),
        new Ingredient('Aleva paprika', 1)
      ];

      getIngredients(){
        return this.ingredients.slice();
      }

      addIngredient(reciveIngredient: Ingredient){
        this.ingredients.push(reciveIngredient);
        this.ingredientChanged.emit(this.ingredients.slice());
      }

      addIngredients(listOfIngredients: Ingredient[]){
        this.ingredients.push(...listOfIngredients);
        this.ingredientChanged.emit(this.ingredients.slice());
      }
      



      /*
      addIngredients(listOfIngredients: Ingredient[]){
        for(let ingredient of this.ingredients) {
            this.addIngredient(ingredient);
        }

      }
      */
    
}