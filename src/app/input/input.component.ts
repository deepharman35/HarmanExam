import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherDataService } from '../teacher-data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  firstName = '';
  lastName = '';
  employmentTerm = '';

  constructor(private router: Router, private teacherDataService: TeacherDataService) { }

  submit() {
    this.teacherDataService.setTeacherData({
      firstName: this.firstName,
      lastName: this.lastName,
      employmentTerm: this.employmentTerm
    });
    this.router.navigate(['/output']);
  }
}
