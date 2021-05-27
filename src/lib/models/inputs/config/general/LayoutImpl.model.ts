import { Layout } from "../../../../interfaces/config/general/Layout.model";
import { Padding } from "../../../../interfaces/config/general/shared/Padding.model";

export class LayoutImpl implements Layout{
    padding: number | Padding = 0;
}