import { NgModule } from '@angular/core';
import { GraphsComponent } from './graphs.component';
import { PieGraphComponent } from './components/pie-graph/pie-graph.component';
import { CommonModule } from '@angular/common'; 
import { GraphService } from './services/graph.service';


@NgModule({
  declarations: [
    GraphsComponent,
    PieGraphComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    GraphsComponent,
    PieGraphComponent,
  ],
  providers: [
    GraphService
  ]
})
export class GraphsModule { }
