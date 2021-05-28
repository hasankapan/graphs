import { Layout } from "../../../../interfaces/config/general/Layout.interface";
import { Padding } from "../../../../interfaces/config/general/shared/Padding.interface";

export class LayoutImpl implements Layout{
    padding: number | Padding = 0;
}