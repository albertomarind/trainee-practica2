import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    template: `
       <div>
            <h1>{{msg}}</h1>
       </div> 
    `,
    styles: [`
        h1 {
            color:green;
        }
    `]
})
export class ServerComponent {
    msg: string = 'hola server';
}