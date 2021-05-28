export interface Font {
    family: string;
    size: number;
    style: 'normal' | 'italic' | 'oblique';
    weight: 'normal' | 'bold' | 'bolder' | 'lighter' | number;
    lineHeight: number;
}