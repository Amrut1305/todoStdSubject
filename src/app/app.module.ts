import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StdDashComponent } from './shared/component/std-dash/std-dash.component';
import { TodoDashComponent } from './shared/component/todo-dash/todo-dash.component';
import { StdFormComponent } from './shared/component/std-dash/std-form/std-form.component';
import { TodoListComponent } from './shared/component/todo-dash/todo-list/todo-list.component';
import { RemoveComponent } from './shared/component/remove/remove.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { HomeComponent } from './shared/component/home/home.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { MaterialModule } from './shared/material/material.module';
import { TodoMainListComponent } from './shared/component/todo-dash/todo-main-list/todo-main-list.component';
import { StdListComponent } from './shared/component/std-dash/std-list/std-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StdDashComponent,
    TodoDashComponent,
    StdFormComponent,
    TodoListComponent,
    RemoveComponent,
    HomeComponent,
    NavbarComponent,
    TodoMainListComponent,
    StdListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
