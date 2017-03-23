import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-d',
  templateUrl: './component-d.component.html',
  styleUrls: ['./component-d.component.css']
})
export class ComponentDComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  test() {
    alert('component D');
  }
}
