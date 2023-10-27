import { Component } from '@angular/core';
import { IStudent } from 'src/app/models/istudent';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  students:IStudent[] = [];
  
  constructor(private stdService:StudentsService){}

  ngOnInit(): void {
    this.students = this.stdService.getAll();
  }


  delete(id:number){
    var result = confirm("Do you want to delete?");
    if(result){
      this.stdService.delete(id);
    }
  }
}
