import { Padding } from "./Padding.interface";

export class ScaleLabel {
    /**
     * @property If true, display the axis title.
     */
    display: boolean;
    /**
     * @property The text for the title.
     */
    labelString: string;
    /**
     * @property Height of an individual line of text
     */
    lineHeight: number;
    /**
     * @property Font color for scale title.
     */
    fontColor: string;
    /**
     * @property Font family for the scale title, follows CSS font-family options.
     */
    fontFamily: string;
    /**
     *  @property Font size for scale title.
     */
    fontSize: number;
    /**
     * @property Font style for the scale title.
     */
    fontStyle: string;
    /**
     * @property Padding to apply around scale labels. Only top and bottom are implemented.
     */
    padding: number | Padding;
}