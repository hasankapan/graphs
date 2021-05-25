import { Align } from "../../enum/Align.enum";
import { Position } from "../../enum/Position.enum";
import { LegendLabel } from "./shared/LegendLabel.model";

export class Legend {
    /* @param display - the legend shown. */
    display: boolean = true;
    /* @param display - Position of the legend. */
    position: Position = Position.LEFT;
    /* @param allign - Alignment of the legend. */
    align: Align = Align.CENTER;
    /* @param fullWidth - Marks that this box should take the full width of the canvas (pushing down other boxes). This is unlikely to need to be changed in day-to-day use. */
    fullWidth: boolean = true;
    /* @param reverse - Legend will show datasets in reverse order. */
    reverse: boolean = false;
    /* @param rtl - true for rendering the legends from right to left. */
    rtl: boolean = false;
    /* @param labels - The legend label configuration is nested below the legend configuration using the labels key. */
    labels: LegendLabel = new LegendLabel();
}