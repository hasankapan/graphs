import { Align } from "../../../models/inputs/enum/Align.enum";
import { Position } from "../../../models/inputs/enum/Position.enum";
import { LegendLabel } from "./shared/LegendLabel.model";

export interface Legend {
    /* @param display - the legend shown. */
    display: boolean;
    /* @param display - Position of the legend. */
    position: Position;
    /* @param allign - Alignment of the legend. */
    align: Align;
    /* @param fullWidth - Marks that this box should take the full width of the canvas (pushing down other boxes). This is unlikely to need to be changed in day-to-day use. */
    fullWidth: boolean;
    /* @param reverse - Legend will show datasets in reverse order. */
    reverse: boolean;
    /* @param rtl - true for rendering the legends from right to left. */
    rtl: boolean;
    /* @param labels - The legend label configuration is nested below the legend configuration using the labels key. */
    labels: LegendLabel;
}