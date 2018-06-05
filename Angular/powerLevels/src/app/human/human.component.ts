import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'subcomponent',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class HumanComponent implements OnInit {
  @Input() title: string;
  @Input() power_level: number;
  constructor() { }

  ngOnInit() {
  }

}