import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../core/models/add-category-request-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { empDetail } from '../core/models/emp-model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient
  ) { }

  addCategory(model: AddCategoryRequest): Observable<empDetail> {
    // return this.http.post<void>(`https://jsonplaceholder.typicode.com/posts`,model)
    return this.http.post<empDetail>(`https://reqres.in/api/users`, model)

  }
}
