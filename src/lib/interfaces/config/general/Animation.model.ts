import { Easing } from "../../../models/inputs/enum/Easing.enum";

export interface Animation {
    /* @param number - The number of milliseconds an animation takes. */
    duration: number;
    /* @param easing - Descriptions inside the type. */
    easing: Easing;
    /* @param animation - If true, the chart will animate in with a rotation animation. */
    animateRotate: boolean;
    /* @param animation - If true, will animate scaling the chart from the center outwards. */
    animateScale: boolean;
}