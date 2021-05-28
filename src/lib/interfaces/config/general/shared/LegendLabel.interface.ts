import { FontStyle } from "../../../../models/inputs/enum/FontStyle.enum";

export interface LegendLabel {
    /**
     * @property  Width of coloured box.
     */
    boxWidth: number;
    /**
     * @property  Font size of text.
     */
    fontSize: number;
    /**
     * @property  Font style of text.
     */
    fontStyle: FontStyle;
    /**
     * @property  Color of text.
     */
    fontColor: string;
    /**
     * @property  Font family of legend text.
     */
    fontFamily: string;
    /**
     * @property  Padding between rows of colored boxes.
     */
    padding: number;

}