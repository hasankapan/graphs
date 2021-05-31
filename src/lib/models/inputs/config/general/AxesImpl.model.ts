import { Common } from "../../../../interfaces/config/general/shared/Common.axes.interface";
import { Axes } from "../../../../interfaces/config/general/Axes.interface";
import { CommonImpl } from "./shared/CommonImpl.axes.model";

export class AxesImpl implements Axes {
    display: boolean = true;
    weight: number = 1;
    commons: Common = new CommonImpl();
}