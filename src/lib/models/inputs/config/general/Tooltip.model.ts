import { FontStyle } from "../../enum/FontStyle.enum";
import { Mode } from "../../enum/Mode.enum";
import { TooltipAlign } from "../../enum/TooltipAlign.enum";
import { TooltipPosition } from "../../enum/TooltipPosition.enum";

export class Tooltip {
    /* @param enabled - Are on-canvas tooltips enabled? */
    enabled: boolean = true;
    /* @param mode - Sets which elements appear in the tooltip. */
    mode: Mode = Mode.NEAREST;
    /* @param intersect - If true, the tooltip mode applies only when the mouse position intersects with an element. If false, the mode will be applied at all times. */
    intersect: boolean = true;
    /* @param position - The mode for positioning the tooltip. */
    position: TooltipPosition = TooltipPosition.NEAREST;
    /* @param Background color of the tooltip. */
    backgroundColor: string = '#ccc';
    /* @param Title styling */
    titleFontFamily: string = 'system-ui';
    titleFontSize: number = 12;
    titleFontStyle: FontStyle = FontStyle.NORMAL;
    titleFontColor: string = '#666';
    titleAlign: TooltipAlign = TooltipAlign.CENTER;
    titleSpacing: number = 2;
    titleMarginBottom: number = 6;
    /* @param Body styling */
    bodyFontFamily: string = 'system-ui';
    bodyFontSize: number = 12;
    bodyFontStyle: FontStyle = FontStyle.NORMAL;
    bodyFontColor: string = '#666';
    bodyAlign: TooltipAlign = TooltipAlign.CENTER;
    bodySpacing: number = 2;
    /* @param Footer styling */
    footerFontFamily: string = 'system-ui';
    footerFontSize: number = 2;
    footerFontStyle: FontStyle = FontStyle.NORMAL;
    footerFontColor: string = '#666';
    footerAlign: TooltipAlign = TooltipAlign.CENTER;
    footerSpacing: number = 2;
    footerMarginTop: number = 6;
    /* @param Padding to add on left and right of tooltip. */
    xPadding: number = 6;
    /* @param Padding to add on top and bottom of tooltip. */
    yPadding: number = 6;
    /* @param Extra distance to move the end of the tooltip arrow away from the tooltip point. */
    caretPadding: number = 2;
    /* @param Size, in px, of the tooltip arrow. */
    caretSize: number = 5;
    /* @param Radius of tooltip corner curves. */
    cornerRadius: number = 6;
    /* @param Color to draw behind the colored boxes when multiple items are in the tooltip. */
    multiKeyBackground: string = '#666';
    /* @param If true, color boxes are shown in the tooltip. */
    displayColors: boolean = true;
    /* @param Border styling */
    borderColor: string = '#000';
    borderWidth: number = 1;
    /* @param true for rendering the legends from right to left. */
    rtl: boolean = false;
}