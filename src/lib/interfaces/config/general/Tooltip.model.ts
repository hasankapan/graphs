import { FontStyle } from "../../../models/inputs/enum/FontStyle.enum";
import { Mode } from "../../../models/inputs/enum/Mode.enum";
import { TooltipAlign } from "../../../models/inputs/enum/TooltipAlign.enum";
import { TooltipPosition } from "../../../models/inputs/enum/TooltipPosition.enum";

export interface Tooltip {
    /* @param enabled - Are on-canvas tooltips enabled? */
    enabled: boolean;
    /* @param mode - Sets which elements appear in the tooltip. */
    mode: Mode;
    /* @param intersect - If true, the tooltip mode applies only when the mouse position intersects with an element. If false, the mode will be applied at all times. */
    intersect: boolean;
    /* @param position - The mode for positioning the tooltip. */
    position: TooltipPosition;
    /* @param Background color of the tooltip. */
    backgroundColor: string;
    /* @param Title styling */
    titleFontFamily: string;
    titleFontSize: number;
    titleFontStyle: FontStyle;
    titleFontColor: string;
    titleAlign: TooltipAlign;
    titleSpacing: number;
    titleMarginBottom: number;
    /* @param Body styling */
    bodyFontFamily: string;
    bodyFontSize: number;
    bodyFontStyle: FontStyle;
    bodyFontColor: string;
    bodyAlign: TooltipAlign;
    bodySpacing: number;
    /* @param Footer styling */
    footerFontFamily: string;
    footerFontSize: number;
    footerFontStyle: FontStyle;
    footerFontColor: string;
    footerAlign: TooltipAlign;
    footerSpacing: number;
    footerMarginTop: number;
    /* @param Padding to add on left and right of tooltip. */
    xPadding: number;
    /* @param Padding to add on top and bottom of tooltip. */
    yPadding: number;
    /* @param Extra distance to move the end of the tooltip arrow away from the tooltip point. */
    caretPadding: number;
    /* @param Size, in px, of the tooltip arrow. */
    caretSize: number;
    /* @param Radius of tooltip corner curves. */
    cornerRadius: number;
    /* @param Color to draw behind the colored boxes when multiple items are in the tooltip. */
    multiKeyBackground: string;
    /* @param If true, color boxes are shown in the tooltip. */
    displayColors: boolean;
    /* @param Border styling */
    borderColor: string;
    borderWidth: number;
    /* @param true for rendering the legends from right to left. */
    rtl: boolean;
}