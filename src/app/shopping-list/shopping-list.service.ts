import { Ingredient } from "../shared/ingredient.model";
import { Subject } from 'rxjs';
//ovaj ingredients nije isti kao list ingredients u shopping-list component
//mislim na sam naziv, ne mora se zvati isti, vec kako hocu ja
export class ShopingListService{
    ingredientChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Meso', 1),
        new Ingredient('Luk', 1),
        new Ingredient('Ulje', 0.5),
        new Ingredient('Aleva paprika', 1)
      ];

      getIngredients(){
        return this.ingredients.slice();
      }

      getIngredient(index: number){
        return this.ingredients[index];
      }

      addIngredient(reciveIngredient: Ingredient){
        this.ingredients.push(reciveIngredient);
        this.ingredientChanged.next(this.ingredients.slice());
      }

      addIngredients(listOfIngredients: Ingredient[]){
        this.ingredients.push(...listOfIngredients);
        this.ingredientChanged.next(this.ingredients.slice());
      }

      updateIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientChanged.next(this.ingredients.slice());

      }

      deleteIngredient(index: number){
        this.ingredients.splice(index, 1);
        this.ingredientChanged.next(this.ingredients.slice());
      }
      



      /*
      addIngredients(listOfIngredients: Ingredient[]){
        for(let ingredient of this.ingredients) {
            this.addIngredient(ingredient);
        }

      }
      */
    
}