import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TemplateReferenceVariablesComponent } from './components/template-reference-variables/template-reference-variables.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'temp', component: TemplateReferenceVariablesComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'lifecycle', component: LifecycleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
