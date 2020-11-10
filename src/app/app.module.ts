import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MyComponent } from './MyComponent.component';
import { TodosComponent } from './components/todos/todos.component';
import { ToDoItemComponent } from './components/todo-item/todo-item.component';

@NgModule({
  declarations: [AppComponent, MyComponent, TodosComponent, ToDoItemComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
