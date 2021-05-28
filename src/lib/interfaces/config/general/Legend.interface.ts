import { Align } from "../../../models/inputs/enum/Align.enum";
import { Position } from "../../../models/inputs/enum/Position.enum";
import { LegendLabel } from "./shared/LegendLabel.interface";

export interface Legend {
    /**
     * @property  the legend shown?.
     */
    display: boolean;
    /**
     * @property  Position of the legend. 
     */
    position: Position;
    /**
     * @property  Alignment of the legend.
     */
    align: Align;
    /**
     * @property  Marks that this box should take the full width of the canvas (pushing down other boxes). 
     * This is unlikely to need to be changed in day-to-day use.
     */
    fullWidth: boolean;
    /**
     * @property  Legend will show datasets in reverse order.
     */
    reverse: boolean;
    /**
     * @property  true for rendering the legends from right to left.
     */
    rtl: boolean;
    /**
     * @property  The legend label configuration is nested below the legend configuration using the labels key.
     */
    labels: LegendLabel;
}