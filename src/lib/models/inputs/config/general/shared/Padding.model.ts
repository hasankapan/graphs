export class Padding {
    left: number = 0;
    right: number = 0;
    top: number = 0;
    bottom: number = 0;

    constructor(top, right, bottom, left){
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
    }
}