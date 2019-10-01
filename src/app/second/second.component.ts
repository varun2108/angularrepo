import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent{
  imgurl="../assets/q.png"
  imgheight="100"
  title: string="quinnox";
  customerdetails:any={
    customercode:1001,
    customername:"jhon",
    customerammount:12000
  }
  result: string= "";
  userdetails: any={
    username:"",
    password:""
  }
  clickme(){
    if(this.userdetails.username=="test" &&  this.userdetails.password=="admin"){
      this.result="login successfull";
    }else{
      this.result="login failed";
    }

  }
}
