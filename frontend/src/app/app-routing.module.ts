import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { PopUpAddComponent } from './pop-up-add/pop-up-add.component';

const routes: Routes = [
  {path:'', component:LoginComponent,},
  {path:'content', component:ContentComponent},
  {path: 'content/:id', component: PopUpAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ContentComponent, LoginComponent];
