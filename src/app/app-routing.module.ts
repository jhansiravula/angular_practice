import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo:'/login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'tasks',
    component: TasksComponent
  }
];

@NgModule({
  imports: [
   RouterModule.forRoot(routes)
  ],
exports: [RouterModule]
})
export class AppRoutingModule {}

