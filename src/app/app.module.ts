import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoModule } from './todo/todo.module';
import { LoginComponent } from './login/login.component';
import { TasksComponent } from './tasks/tasks.component';
import { CompletedtasksComponent } from './tasks/completedtasks/completedtasks.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TasksComponent,
    CompletedtasksComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    TodoModule       //importing a module into another module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
