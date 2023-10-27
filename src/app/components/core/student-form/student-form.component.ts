import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IStudent } from 'src/app/models/istudent';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  student: IStudent ={
    id:0,
    name:'',
    faculty:'',
    Degree:0,
  }
studentId:number = 0;
  constructor(private stdService:StudentsService,private activatedRoute:ActivatedRoute , private router:Router){}

  ngOnInit(): void {
    this.studentId = this.activatedRoute.snapshot.params['id'];

    if(this.studentId != 0){
      let std = this.stdService.getById(this.studentId) ;
      if(std) this.student = std;
    }

  }

  GetData(e:Event){
    e.preventDefault();

    console.log(this.student);
    if(this.studentId){
      // edit
      this.stdService.edit(this.studentId,this.student);
    }else{
      //add
      this.stdService.add(this.student);
    }

    // go to another page
    this.router.navigate(['/students']);
  }
}
