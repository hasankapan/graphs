import { NgModule } from '@angular/core';
import { GraphsComponent } from './graphs.component';
import { PieGraphComponent } from './components/pie-graph/pie-graph.component';
import { CommonModule } from '@angular/common'; 


@NgModule({
  declarations: [
    GraphsComponent,
    PieGraphComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GraphsComponent,
    PieGraphComponent
  ]
})
export class GraphsModule { }
