import { Padding } from "./shared/Padding.model";

export class Layout {
    /* @param padding - If this value is a number, it is applied to all sides of the chart (left, top, right, bottom). 
    If this value is an object, the left property defines the left padding. Similarly the right, top and bottom properties can also be specified. */
    padding: number | Padding = 0;
}