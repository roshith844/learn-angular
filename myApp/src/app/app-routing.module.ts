import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TemplateReferenceVariablesComponent } from './components/template-reference-variables/template-reference-variables.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' 
},
{path: 'home', component: HomeComponent},
{path: 'temp', component: TemplateReferenceVariablesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
