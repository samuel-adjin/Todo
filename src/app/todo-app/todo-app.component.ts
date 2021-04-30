import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {
    activity:any[] = [];
    completed:any[] = [];
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  userInput = this.formBuilder.group({
     todoList: ["", Validators.required],  
     check: new FormControl(),
  },
  )

 


   add():void{
    
    if(this.activity.indexOf(this.userInput.value.todoList) !== -1){
        alert("No duplicate is allowed");
        return;
    }else{
      this.activity.push(this.userInput.value.todoList);
    }
    this.userInput.reset();

    // console.log(this.activity);
    
   }

   remove():void{
     this.activity.splice(0,this.activity.length);
   }

 
   checkHandler(value:boolean){
     
     return value;

   }
   checks =false;

 change(name:any,isChecked:boolean){
        if(isChecked){
          alert("okay")
        }
       

    //  alert(this.activity[i])
    //  alert(event.target.checked)
   }
    
   
 }

 


