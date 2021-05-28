import { LegendLabel } from "../../../../../interfaces/config/general/shared/LegendLabel.interface";
import { FontStyle } from "../../../enum/FontStyle.enum";

export class LegendLabelImpl implements LegendLabel{
    boxWidth: number = 30;
    fontSize: number = 12;
    fontStyle: FontStyle = FontStyle.NORMAL;
    fontColor: string = '#666';
    fontFamily: string = 'system-ui';
    padding: number = 10;
}