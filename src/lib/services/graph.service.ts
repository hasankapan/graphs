import { Injectable } from '@angular/core';
import { PieGraphConfig } from '../interfaces/config/PieGraphConfig.interface';
import { PieGraphConfigImpl } from '../models/inputs/config/PieGraphConfigImpl.model';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor() { }

  //it will be factory
  getDefaultPieConfig() :PieGraphConfig{
    let config:PieGraphConfig = new PieGraphConfigImpl();
    return config;
  }
}
