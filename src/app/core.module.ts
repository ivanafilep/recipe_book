import { NgModule } from "@angular/core";
import { ShopingListService } from "./shopping-list/shopping-list.service";
import { RecipeService } from "./recipes/recipe.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptorService } from "./auth/auth-inteceptor.service";
import { LoggingService } from "./logging.service";

@NgModule({
    providers: [
        ShopingListService, 
        RecipeService, 
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptorService, 
      multi: true
    },
    //LoggingService
    ]
})
export class CoreModule{

}