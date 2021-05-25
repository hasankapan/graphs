import { Component, OnInit } from '@angular/core';
import { NameValue } from './models/inputs/data/core/NameValue.model';

@Component({
  selector: 'ngss-graphs',
  template: `
    <ngss-pie-graph *ngIf="nameValueList.length > 0" [mainDataSource]='nameValueList'></ngss-pie-graph>
  `,
  styles: [
  ]
})
export class GraphsComponent implements OnInit {
  nameValueList:NameValue[] = [];
  constructor() { }

  ngOnInit(): void {
    let nameValue:NameValue = new NameValue("hasan");
    nameValue.setValue(150);

    this.nameValueList.push(nameValue);
  }

}
