import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent  {
  islogedin:boolean = true
  isnewuser:boolean = true
  employees:any=[
    {empid:1001, empname:"king", salary:20000}
    ,{empid:1002, empname:"ravi", salary:25000}
    ,{empid:1003, empname:"raju", salary:23000}
    ,{empid:1004, empname:"arjun", salary:26000}

  ]



}
