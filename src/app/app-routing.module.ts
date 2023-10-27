import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/core/home/home.component';
import { ProductsComponent } from './components/core/products/products.component';
import { ContactsComponent } from './components/core/contacts/contacts.component';
import { NotfoundComponent } from './components/core/notfound/notfound.component';
import { ProductDetailsComponent } from './components/core/product-details/product-details.component';
import { ProductFormComponent } from './components/core/product-form/product-form.component';
import { StudentsComponent } from './components/core/students/students.component';
import { StudentDetailsComponent } from './components/core/student-details/student-details.component';
import { StudentFormComponent } from './components/core/student-form/student-form.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',redirectTo:''},
  {path:'products',component:ProductsComponent},
  {path:'products/details/:id',component:ProductDetailsComponent},
  {path:'products/edit/:id',component:ProductFormComponent},
  {path:'products/new',component:ProductFormComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'students',component:StudentsComponent},
  {path:'students/details/:id',component:StudentDetailsComponent},
  {path:'students/edit/:id',component:StudentFormComponent},
  {path:'students/new',component:StudentFormComponent},
  {path: '**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
