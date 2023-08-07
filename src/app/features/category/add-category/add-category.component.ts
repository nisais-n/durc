import { Component, OnDestroy } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request-model';
import { CategoryService } from '../services/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnDestroy {


  model: AddCategoryRequest;
  private addCategorySubscribtion?: Subscription;
  nameList?: [''];

  constructor(private categegoryServices: CategoryService) {
    this.model = {
      name: '',
      job: ''
    }
  }
  ngOnDestroy(): void {
    this.addCategorySubscribtion?.unsubscribe();
  }

  onFSubmit() {
    this.addCategorySubscribtion = this.categegoryServices.addCategory(this.model)
      .subscribe({
        next: (response) => {
          console.log("this was successful", response)
        },
        error: (error) => {
          console.log(error)
        }
      });
  }

}
