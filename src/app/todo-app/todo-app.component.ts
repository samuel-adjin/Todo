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
    isSelected:any = false;
    selectedName:any;
    final:any;
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

 
  //  checkHandler(value:boolean){
     
  //    return value;

  //  }
  //  checks =false;

//  change(isChecked:boolean){
//   if(isChecked ){
  
//   }

    //  alert(this.activity[i])
    //  alert(event.target.checked)
  //  }

change(event:any){
  this.isSelected = event.target.checked
  this.selectedName = event.target.name;
  // alert(this.isSelected)
  // for(let i =0; i<this.activity.length;i++){
  //   if(this.isSelected === true && this.activity[i] == this.selectedName){
  //       // this.activity.splice(i,1)
  //     this.completed.push(this.selectedName);
  //     // console.log(this.completed)
  //     // console.log(this.selectedName)
  //   }else if(this.isSelected === false && this.activity[i] == this.selectedName){
  //      let index = this.activity.indexOf(this.completed[i])
  //     this.completed.splice(index,1);
  //     // console.log(this.completed)
  //   }
  // }
  
  
  }

  
deleteSelected(){
    // alert(this.selectedName)
    let numberToDelete:number;
    for(let i =0; i<this.activity.length;i++){
      if(this.isSelected === true && this.activity[i] == this.selectedName){
        // let index = this.activity.indexOf(this.selectedName);
        // this.activity.splice(this.activity[index],1)
        this.completed.push(this.selectedName);
        let index = this.activity.indexOf(this.completed[i]);
        this.activity.splice(this.completed[i],1)
        // console.log(this.activity)
      // this.completed.push(this.selectedName);
      // console.log(this.completed)
      // console.log(this.selectedName)
    }
    }
}


// deleteSelected(){

// for(let i=0; i<this.activity.length;i++){
//   if(this.activity[i].includes(this.completed[i])){
//     let index = this.activity.indexOf(this.completed[i])
//       this.activity.splice(index,1);
//       console.log(this.activity)

//   }
// }
     



  // alert(this.selectedName)
  // let numberToDelete:number;
  // for(let i =0; i<this.activity.length;i++){
    // if(this.isSelected === true && this.activity[i] == this.selectedName){
      // let index = this.activity.indexOf(this.selectedName);
      // this.activity.splice(this.activity[index],1)
      // this.completed.push(this.selectedName);
      // let index = this.activity.indexOf(this.completed[i]);
      // this.activity.splice(0,this.activity.length)
      // this.activity =[...this.final]
      // console.log(this.activity)
    // this.completed.push(this.selectedName);
    // console.log(this.completed)
    // console.log(this.selectedName)
  }
  

 



//    changeHandler(event:any){
//      this.isSelected = event.target.checked;
//       alert("h")
      
// }

  
 
 



