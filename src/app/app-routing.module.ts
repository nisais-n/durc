import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './core/components/pages/category/category-list/category-list.component';
import { AddCategoryComponent } from './core/components/pages/category/add-category/add-category.component';
import { combineLatest } from 'rxjs';
import { EmpListComponent } from './core/components/pages/emp/emp-list/emp-list/emp-list.component';

const routes: Routes = [
  {
    path: 'admin/categories',
    component: CategoryListComponent
  },
  {
    path: 'admin/categories/add',
    component: AddCategoryComponent
  },
  {
    path: 'emp',
    component: EmpListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
