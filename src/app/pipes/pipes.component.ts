import { Component} from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent{
  dividend:number;
  divisor:number;
customer:any={
  fristname:"jhon",
  lastname:"smith",
  ammount:100,
  persentage:0.2,
  msg:"my message",
  salesdate:new Date()
}

}
