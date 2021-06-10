import { Injectable } from '@angular/core';
import { NGChart } from '../interfaces/index/NGChart.namespace';
import { NGChartDefaults } from '../models/index/NGChartDefaults.namespace';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor() { }

  //it will be factory
  getDefaultPieConfig() :NGChart.ChartOptions{
    return new NGChartDefaults.PieChartOptions();
  }
}
