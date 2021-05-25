import { FontStyle } from "../../enum/FontStyle.enum";
import { Position } from "../../enum/Position.enum";

export class Title {
    /* @param display - the title shown. */
    display: boolean = true;
    /* @param display - Possible title positions. */
    position: Position = Position.TOP;
    /* @param fontSize - size of font. */
    fontSize: number = 13;
    /* @param fontFamily - Font family for the title text. */
    fontFamily: string = 'system-ui';
    /* @param fontColor - color of font */
    fontColor: string = '#666';
    /* @param fontStyle - style of font */
    fontStyle: FontStyle = FontStyle.NORMAL;
    /* @param padding - Number of pixels to add above and below the title text. */
    padding: number = 8;
    /* @param lineHeight - Height of an individual line of text. */
    lineHeight: number = 1.2
    /* @param text - Title text to display. If specified as an array, text is rendered on multiple lines. */
    text: string | string[] = 'Custom Title';
}