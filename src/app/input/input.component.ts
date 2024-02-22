import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherDataService } from '../teacher-data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent {
  firstName = '';
  lastName = '';
  employmentTerm = 'Full-time'; // Default selection

  constructor(private teacherDataService: TeacherDataService, private router: Router) {}

  submit() {
    this.teacherDataService.setTeacherData({
      firstName: this.firstName,
      lastName: this.lastName,
      employmentTerm: this.employmentTerm
    });
    this.router.navigate(['/output']);
  }
}
