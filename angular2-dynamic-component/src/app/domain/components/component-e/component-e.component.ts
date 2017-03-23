import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-e',
  templateUrl: './component-e.component.html',
  styleUrls: ['./component-e.component.css']
})
export class ComponentEComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  test() {
    alert('component E');
  }


}
