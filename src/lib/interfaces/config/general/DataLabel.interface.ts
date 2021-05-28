import { Anchor } from "../../../models/inputs/enum/Anchor.enum";
import { TextAlign } from "../../../models/inputs/enum/TextAlign.enum";
import { Font } from "./shared/Font.interface";
import { Padding } from "./shared/Padding.interface";

export interface DataLabel {
    align: 'bottom' | 'center' | 'end' | 'left' | 'right' | 'start' | 'top' | number;
    anchor: Anchor;
    backgroundColor?: string;
    borderColor?: string;
    borderRadius: number;
    borderWidth: number;
    clamp: boolean;
    clip: boolean;
    color: string;
    display: boolean;
    font: Font;
    offset: number;
    opacity: number;
    padding: number | Padding;
    rotation: number;
    textAlign: TextAlign;
}