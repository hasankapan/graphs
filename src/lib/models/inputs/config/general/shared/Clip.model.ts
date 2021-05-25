export class Clip {
    left: number;
    right: number;
    top: number;
    bottom: number;

    constructor(top, right, bottom, left){
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
    }
}