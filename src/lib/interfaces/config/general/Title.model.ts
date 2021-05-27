import { FontStyle } from "../../../models/inputs/enum/FontStyle.enum";
import { Position } from "../../../models/inputs/enum/Position.enum";

export interface Title {
    /* @param display - the title shown. */
    display: boolean;
    /* @param display - Possible title positions. */
    position: Position;
    /* @param fontSize - size of font. */
    fontSize: number;
    /* @param fontFamily - Font family for the title text. */
    fontFamily: string;
    /* @param fontColor - color of font */
    fontColor: string;
    /* @param fontStyle - style of font */
    fontStyle: FontStyle;
    /* @param padding - Number of pixels to add above and below the title text. */
    padding: number;
    /* @param lineHeight - Height of an individual line of text. */
    lineHeight: number;
    /* @param text - Title text to display. If specified as an array, text is rendered on multiple lines. */
    text: string | string[];
}