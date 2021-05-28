import { Easing } from "../../../models/inputs/enum/Easing.enum";

export interface Animation {
    /**
     * @property  The number of milliseconds an animation takes.
     */
    duration: number;
    /**
     * @property  Easing.enum
     */
    easing: Easing;
    /**
     * @property  If true, the chart will animate in with a rotation animation.
     */
    animateRotate: boolean;
    /**
     * @property  If true, will animate scaling the chart from the center outwards.
     */
    animateScale: boolean;
}