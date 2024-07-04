import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserFormComponent } from './user-form/user-form.component';
import { CarsComponent } from './cars/cars.component';

const routes: Routes = [
  { path: 'about', title: 'About', component: AboutComponent },
  { path: 'contact', title: 'Contact', component: ContactComponent },
  { path: 'home', title: 'Home', component: HomeComponent },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      { path: 'details', component: UserDetailsComponent },
      { path: 'form', component: UserFormComponent },
      { path: 'car/:id', component: CarsComponent },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
