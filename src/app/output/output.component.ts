import { Component, OnInit } from '@angular/core';
import { TeacherDataService } from '../teacher-data.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  teacherData = { firstName: '', lastName: '', employmentTerm: '' };

  constructor(private teacherDataService: TeacherDataService) { }

  ngOnInit() {
    this.teacherData = this.teacherDataService.getTeacherData();
  }
}
