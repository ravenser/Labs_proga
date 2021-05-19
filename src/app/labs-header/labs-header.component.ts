import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-labs-header',
  templateUrl: './labs-header.component.html',
  styleUrls: ['./labs-header.component.scss'],
})
export class LabsHeaderComponent implements OnInit {
  @Input() name: string = "Лабораторні робоботи";
  @Input() variant: number = 20 
  constructor() { }

  ngOnInit() {}

}
