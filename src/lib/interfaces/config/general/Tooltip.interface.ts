import { FontStyle } from "../../../models/inputs/enum/FontStyle.enum";
import { Mode } from "../../../models/inputs/enum/Mode.enum";
import { TooltipAlign } from "../../../models/inputs/enum/TooltipAlign.enum";
import { TooltipPosition } from "../../../models/inputs/enum/TooltipPosition.enum";

export interface Tooltip {
    /**
     * @property  Are on-canvas tooltips enabled?
     */
    enabled: boolean;
    /**
     * @property  Sets which elements appear in the tooltip.
     */
    mode: Mode;
    /**
     * @property  If true, the tooltip mode applies only when the mouse position intersects with an element. If false, the mode will be applied at all times.
     */
    intersect: boolean;
    /**
     * @property  The mode for positioning the tooltip.
     */
    position: TooltipPosition;
    /**
     * @property  Background color of the tooltip. 
     */
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
    /**
     * @property  Padding to add on left and right of tooltip.
     */
    xPadding: number;
    /**
     * @property  Padding to add on top and bottom of tooltip.
     */
    yPadding: number;
    /**
     * @property  Extra distance to move the end of the tooltip arrow away from the tooltip point.
     */
    caretPadding: number;
    /**
     * @property  Size, in px, of the tooltip arrow.
     */
    caretSize: number;
    /**
     * @property  Radius of tooltip corner curves.
     */
    cornerRadius: number;
    /**
     * @property  Color to draw behind the colored boxes when multiple items are in the tooltip.
     */
    multiKeyBackground: string;
    /**
     * @property  If true, color boxes are shown in the tooltip.
     */
    displayColors: boolean;
    borderColor: string;
    borderWidth: number;
    /**
     * @property  true for rendering the legends from right to left.
     */
    rtl: boolean;
}