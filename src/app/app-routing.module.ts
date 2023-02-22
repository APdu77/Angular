import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";
import { HomeComponent } from "./components/home/home.component";
import { OneComponent } from "./components/one/one.component";
import { TeamsComponent } from "./components/teams/teams.component";
import { TodoDetailsComponent } from "./components/todo-details/todo-details.component";
import { TodosComponent } from "./components/todos/todos.component";
import { TwoComponent } from "./components/two/two.component";
import { UserGuard } from "./guards/user.guard";

const routes: Routes = [
    { 
      path: 'home', 
      component: HomeComponent,
      children: [
        { path: 'one', component: OneComponent},
        { path: 'two', component: TwoComponent},
      ]
    },
    { 
      path: 'todos', 
      component: TodosComponent,
      children: [
        { path: ':id', component: TodoDetailsComponent},
      ]
    },
    { 
      path: 'about', 
      component: AboutComponent,
      canActivate: [ UserGuard ],
      children: [
        { path: 'teams', component: TeamsComponent},
        { 
          path: 'contact', 
          component: ContactComponent,
        },
      ]
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' },
  ];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}