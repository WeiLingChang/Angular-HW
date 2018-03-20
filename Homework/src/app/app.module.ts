import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { ReativeFormComponentComponent } from './reative-form-component/reative-form-component.component';
import { TemplateFormComponentComponent } from './template-form-component/template-form-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ReativeFormComponentComponent,
    TemplateFormComponentComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
