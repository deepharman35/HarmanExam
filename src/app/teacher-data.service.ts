import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherDataService {
  private teacherData = { firstName: '', lastName: '', employmentTerm: '' };

  setTeacherData(data: any) {
    this.teacherData = data;
  }

  getTeacherData() {
    return this.teacherData;
  }
}
