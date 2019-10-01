import { Component } from "@angular/core";

@Component({
    selector:"first-app",
    template:`<h2>this is my component</h2>`,
    styles:[`h2{color:red;font-size:20px;
    }`]
})
export class FirstComponet{
    title:"first component"
}
