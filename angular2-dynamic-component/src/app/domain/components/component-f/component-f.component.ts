import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-f',
  templateUrl: './component-f.component.html',
  styleUrls: ['./component-f.component.css']
})
export class ComponentFComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  test() {
    alert('component f');
  }
}
