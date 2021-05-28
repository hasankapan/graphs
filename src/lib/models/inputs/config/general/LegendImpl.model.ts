import { Legend } from "../../../../interfaces/config/general/Legend.interface";
import { LegendLabel } from "../../../../interfaces/config/general/shared/LegendLabel.interface";
import { Align } from "../../enum/Align.enum";
import { Position } from "../../enum/Position.enum";
import { LegendLabelImpl } from "./shared/LegendLabelImpl.model";

export class LegendImpl implements Legend{
    display: boolean = true;
    position: Position = Position.LEFT;
    align: Align = Align.CENTER;
    fullWidth: boolean = true;
    reverse: boolean = false;
    rtl: boolean = false;
    labels: LegendLabel = new LegendLabelImpl();
}