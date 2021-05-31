import { Padding } from "../../../../../interfaces/config/general/shared/Padding.interface";
import { ScaleLabel } from "../../../../../interfaces/config/general/shared/ScaleLabel.interface";

export class ScaleLabelImpl implements ScaleLabel {
    display: boolean = false;
    labelString: string = 'custom';
    lineHeight: number = 1;
    fontColor: string = '#666';
    fontFamily: string = 'system-ui';
    fontSize: number = 12;
    fontStyle: string = 'normal';
    padding: number | Padding = 4;
}