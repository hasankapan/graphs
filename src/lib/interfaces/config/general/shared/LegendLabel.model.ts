import { FontStyle } from "../../../../models/inputs/enum/FontStyle.enum";

export interface LegendLabel {
    /* @param boxWidth - Width of coloured box. */
    boxWidth: number;
    /* @param fontSize - Font size of text. */
    fontSize: number;
    /* @param fontStyle - Font style of text. */
    fontStyle: FontStyle;
    /* @param fontColor - Color of text. */
    fontColor: string;
    /* @param fontFamily - Font family of legend text. */
    fontFamily: string;
    /* @param padding - Padding between rows of colored boxes. */
    padding: number;

}