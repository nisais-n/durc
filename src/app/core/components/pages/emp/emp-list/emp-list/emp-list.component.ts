import { Component, Input } from '@angular/core';
import { empDetail } from 'src/app/core/models/emp-model';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent {

  @Input() empList?: empDetail[];



}