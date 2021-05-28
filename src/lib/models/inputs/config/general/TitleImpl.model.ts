import { Title } from "../../../../interfaces/config/general/Title.interface";
import { FontStyle } from "../../enum/FontStyle.enum";
import { Position } from "../../enum/Position.enum";

export class TitleImpl implements Title{
    display: boolean = true;
    position: Position = Position.TOP;
    fontSize: number = 13;
    fontFamily: string = 'system-ui';
    fontColor: string = '#666';
    fontStyle: FontStyle = FontStyle.NORMAL;
    padding: number = 8;
    lineHeight: number = 1.2
    text: string | string[] = 'Custom Title';
}