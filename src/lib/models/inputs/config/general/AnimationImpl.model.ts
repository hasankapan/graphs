import { Animation } from "../../../../interfaces/config/general/Animation.model";
import { Easing } from "../../enum/Easing.enum";

export class AnimationImpl implements Animation{
    duration: number = 1000;
    easing: Easing = Easing.easeOutBack;
    animateRotate: boolean = false;
    animateScale: boolean = false;
}