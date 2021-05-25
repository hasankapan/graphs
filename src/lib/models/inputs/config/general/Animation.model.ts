import { Easing } from "../../enum/Easing.enum";

export class Animation {
    /* @param number - The number of milliseconds an animation takes. */
    duration: number = 1000;
    /* @param easing - Descriptions inside the type. */
    easing: Easing = Easing.easeOutBack;
    /* @param animation - If true, the chart will animate in with a rotation animation. */
    animateRotate: boolean = false;
    /* @param animation - If true, will animate scaling the chart from the center outwards. */
    animateScale: boolean = false;
}