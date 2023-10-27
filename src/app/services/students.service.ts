import { Injectable } from '@angular/core';
import { IStudent } from '../models/istudent';
import { studentsList } from '../models/studentList';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  students : IStudent[];
  constructor() {
    this.students = studentsList
  }

  getAll():IStudent[]{
    return this.students;
  }

  getById(id:number):IStudent|undefined{
    return this.students.find((std)=>std.id == id);
  }

  add(prod:IStudent):void{
    let nextId = studentsList[studentsList.length-1].id +1;
    prod.id = nextId;
    this.students.push(prod);
  }

  edit(id:number,std:IStudent):void{
    let index=this.students.findIndex((p)=> p.id==id);
    if (index != -1){
      this.students[index].name = std.name;
      this.students[index].faculty = std.faculty;
      this.students[index].Degree = std.Degree; 
    } 
  }

  delete(id:number):void{
    let index=this.students.findIndex((p)=> p.id==id);
    if (index != -1){
      this.students.splice(index,1)
    }
  }
}
