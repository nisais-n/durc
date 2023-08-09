import { Component, OnDestroy } from '@angular/core';
import { AddCategoryRequest } from '../../../../models/add-category-request-model';
import { CategoryService } from '../../../../../services/category.service';
import { Subscription } from 'rxjs';
import { empDetail } from 'src/app/core/models/emp-model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnDestroy {


  model: AddCategoryRequest;
  private addCategorySubscribtion?: Subscription;
  nameList?: [''];
  empList?: empDetail[] = [];
  alertVisible: boolean = true;

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    job: new FormControl('', Validators.required)
  })
  constructor(
    private categegoryServices: CategoryService,

  ) {
    this.model = {
      name: '',
      job: ''
    }
  }
  ngOnDestroy(): void {
    this.addCategorySubscribtion?.unsubscribe();
  }

  onFSubmit() {

    // Check if the employee name and job combination already exists
    const duplicateEmployee = this.empList?.find(
      emp => emp.name === this.model.name && emp.job === this.model.job
    );

    if (duplicateEmployee) {
      console.log('Duplicate entry detected.');
      // Handle duplicate entry, such as displaying an error message
      return;
    }

    this.addCategorySubscribtion = this.categegoryServices.addCategory(this.model)
      .subscribe({
        next: (response) => {
          console.log("This was successful", response);
          if (response) {
            this.empList?.push(response);
            console.log(this.empList); // Log  empList array
            this.alertVisible = true
          }
        },
        error: (error) => {
          console.log(error);
        }
      });
  }




}
