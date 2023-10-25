import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Gulas', 'Ovo je ukusan gulas', 'https://nova.rs/wp-content/uploads/2021/04/shutterstock_1011502120-725x483.jpg'),
    new Recipe('Spaghetti Carbonara','Najlepse jelo', 'https://images.24ur.com/media/images/1024x576/Jan2018/f053916a0b_62023484.jpg?v=c812'),
    new Recipe('Pita sa sirom', 'Domaca pita sa sirom', 'https://podravkaiovariations.blob.core.windows.net/8dcd71e6-6423-11eb-8de0-0242ac12003c/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1024x768-f2b21802-64bc-11eb-a115-0242ac130010.webp'),
  ];

}
