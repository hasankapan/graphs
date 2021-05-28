import { Font } from "../../../../../interfaces/config/general/shared/Font.interface";

export class FontImpl implements Font {
    family: string = 'system-ui';
    size: number = 7;
    style: 'normal' | 'italic' | 'oblique' = 'normal';
    weight: 'normal' | 'bold' | 'bolder' | 'lighter' | number = 'normal';
    lineHeight: number = 1;
}