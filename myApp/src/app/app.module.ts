import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TemplateReferenceVariablesComponent } from './components/template-reference-variables/template-reference-variables.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TemplateReferenceVariablesComponent,
    PipesComponent,
    DirectivesComponent,
    LifecycleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
