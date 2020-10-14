import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-form',
  templateUrl: './type-form.component.html',
  styleUrls: ['./type-form.component.scss'],
})
export class TypeFormComponent implements OnInit {
  matchType = [
    {
      type: 'Test',
      value: 'test',
    },
    {
      type: 'Custom First Class',
      value: 'customTest',
    },
    {
      type: 'One Day',
      value: 'odi',
    },
    {
      type: 'T20',
      value: 't20',
    },
    {
      type: 'Custom Shorter Version',
      value: 'customShort',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
