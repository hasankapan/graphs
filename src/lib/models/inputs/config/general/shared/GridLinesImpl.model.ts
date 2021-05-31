import { GridLines } from "../../../../../interfaces/config/general/shared/GridLine.interface";

export class GridLinesImpl implements GridLines {
     display: boolean = true;
     circular: boolean = false;
     color: string | string[] = '#000';
     borderDash: number[] = [];
     borderDashOffset: number = 0;
     lineWidth: number | number[] = 1;
     drawBorder: boolean = true;
     drawOnChartArea: boolean = true;
     drawTicks: boolean = true;
     tickMarkLength: number = 10;
     zeroLineWidth: number = 1;
     zeroLineColor: string = '#000';
     zeroLineBorderDash: number[] = [];
     zeroLineBorderDashOffset: number = 0;
     offsetGridLines: boolean = false;
     z: number = 0;
}