import { Padding } from "../../../../interfaces/config/general/shared/Padding.interface";
import { DataLabel } from "../../../../interfaces/config/general/DataLabel.interface";
import { FontImpl } from "./shared/FontImpl.model";
import { Font } from "../../../../interfaces/config/general/shared/Font.interface";
import { TextAlign } from "../../enum/TextAlign.enum";
import { Anchor } from "../../enum/Anchor.enum";

export class DataLabelImpl implements DataLabel {
    align: 'bottom' | 'center' | 'end' | 'left' | 'right' | 'start' | 'top' | number = "center";
    anchor: Anchor = Anchor.CENTER;
    backgroundColor?: string = null;
    borderColor?: string = '#000';
    borderRadius: number = 25;
    borderWidth: number = .5;
    clamp: boolean = false;
    clip: boolean = false;
    color: string = "#000";
    display: boolean = false;
    font: Font = new FontImpl();
    offset: number = 0;
    opacity: number = 1;
    padding: number | Padding = 3;
    rotation: number = 0;
    textAlign: TextAlign = TextAlign.START;
}