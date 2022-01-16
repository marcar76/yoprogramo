import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular CRUD';
 profileForm= new FormGroup({ 
    name:  new FormControl(''),
  position:  new FormControl(''),
    });
   
  
    employees = [
    {'name': 'Pepe', position: 'manager'},
    {'name': 'Jhony', position: 'vendor'},
    {'name': 'Quico', position: 'programmer'}
  ];
}
