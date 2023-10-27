import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IStudent } from 'src/app/models/istudent';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  studentId:number =0;
  student:IStudent|undefined;

  constructor(private activatedRoute:ActivatedRoute,private stdService:StudentsService){}
  ngOnInit(): void {
    
    this.studentId = this.activatedRoute.snapshot.params['id'];

    this.student = this.stdService.getById(this.studentId);
  }
}
