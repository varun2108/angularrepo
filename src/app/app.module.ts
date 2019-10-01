import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponet } from './first.component';
import { SecondComponent } from './second/second.component';
import { PipesComponent } from './pipes/pipes.component';
import { WelcomePipe } from './pipes/welcome.pipe';
import { DivisionPipe } from './pipes/division.pipe';
import { DirectivesComponent } from './directives/directives.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponet,
    SecondComponent,
    PipesComponent,
    WelcomePipe,
    DivisionPipe,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [DirectivesComponent,
    PipesComponent,
    SecondComponent]
})
export class AppModule { }
