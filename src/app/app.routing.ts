/**
 * Created by Arnold on 2018-04-10.
 */
import {Routes, RouterModule} from "@angular/router";
import {ListpetComponent} from "./listpet/listpet.component";
import {AddnewpetComponent} from "./addnewpet/addnewpet.component";
import {ViewpetComponent} from "./viewpet/viewpet.component";

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/listpets', pathMatch:'full'},
  {path: 'listpets', component:ListpetComponent},
  {path: 'addnewpet', component:AddnewpetComponent},
  {path: 'viewpet', component:ViewpetComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
