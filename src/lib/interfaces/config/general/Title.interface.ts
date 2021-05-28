import { FontStyle } from "../../../models/inputs/enum/FontStyle.enum";
import { Position } from "../../../models/inputs/enum/Position.enum";

export interface Title {
    /**
     * @property  the title shown.
     */
    display: boolean;
    /**
     * @property  Possible title positions.
     */
    position: Position;
    /**
     * @property  size of font.
     */
    fontSize: number;
    /**
     * @property  Font family for the title text.
     */
    fontFamily: string;
    /**
     * @property  color of font.
     */
    fontColor: string;
    /**
     * @property  style of font.
     */
    fontStyle: FontStyle;
    /**
     * @property  Number of pixels to add above and below the title text.
     */
    padding: number;
    /**
     * @property  Height of an individual line of text.
     */
    lineHeight: number;
    /**
     * @property  Title text to display. If specified as an array, text is rendered on multiple lines.
     */
    text: string | string[];
}