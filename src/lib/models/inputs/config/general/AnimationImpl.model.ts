import { Animation } from "../../../../interfaces/config/general/Animation.interface";
import { Easing } from "../../enum/Easing.enum";

export class AnimationImpl implements Animation{
    duration: number = 1000;
    easing: Easing = Easing.easeInOutExpo;
    animateRotate: boolean = false;
    animateScale: boolean = false;
}