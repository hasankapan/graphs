import { Padding } from "../../../../../interfaces/config/general/shared/Padding.interface";

export class PaddingImpl implements Padding{
    left: number = 0;
    right: number = 0;
    top: number = 0;
    bottom: number = 0;

    constructor(top:number, right:number, bottom:number, left:number){
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
    }
}