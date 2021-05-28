import { Style } from "../../../../../interfaces/config/general/shared/Style.interface";

export class StyleImpl implements Style {
    color: string = "#000";

    constructor(color: string) {
        this.color = color;
    }
}