import { Ticks } from "../../../../../interfaces/config/general/shared/Ticks.interface";
import { GridLines } from "../../../../../interfaces/config/general/shared/GridLine.interface";
import { ScaleLabel } from "../../../../../interfaces/config/general/shared/ScaleLabel.interface";
import { Common } from "../../../../../interfaces/config/general/shared/Common.axes.interface";
import { Position } from "../../../enum/Position.enum";
import { GridLinesImpl } from "./GridLinesImpl.model";
import { ScaleLabelImpl } from "./ScaleLabelImpl.model";
import { TicksImpl } from "./TicksImpl.model";

export class CommonImpl implements Common {
     type: string;
     position: 'left' | 'top' | 'right' | 'bottom' | Position;
     offset: boolean = false;
     id: string;
     gridLines: GridLines = new GridLinesImpl();
     scaleLabel: ScaleLabel = new ScaleLabelImpl();
     ticks: Ticks = new TicksImpl();
}