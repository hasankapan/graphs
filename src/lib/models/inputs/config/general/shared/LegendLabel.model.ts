import { FontStyle } from "../../../enum/FontStyle.enum";

export class LegendLabel {

    /* @param boxWidth - Width of coloured box. */
    boxWidth: number = 30;
    /* @param fontSize - Font size of text. */
    fontSize: number = 12;
    /* @param fontStyle - Font style of text. */
    fontStyle: FontStyle = FontStyle.NORMAL;
    /* @param fontColor - Color of text. */
    fontColor: string = '#666';
    /* @param fontFamily - Font family of legend text. */
    fontFamily: string = 'system-ui';
    /* @param padding - Padding between rows of colored boxes. */
    padding: number = 10;

}