export class GridLines {
    /**
     * @property If false, do not display grid lines for this axis.
     */
    display: boolean;
    /**
     * @property If true, gridlines are circular (on radar chart only).
     */
    circular: boolean;
    /**
     * @property The color of the grid lines. If specified as an array, the first color applies to the first grid line, the second to the second grid line and so on.
     */
    color: string | string[];
    /**
     * @property Length and spacing of dashes on grid lines.
     */
    borderDash: number[];
    /**
     * @property Offset for line dashes. 
     */
    borderDashOffset: number;
    /**
     * @property Stroke width of grid lines.
     */
    lineWidth: number | number[];
    /**
     * @property If true, draw border at the edge between the axis and the chart area.
     */
    drawBorder: boolean;
    /**
     * @property If true, draw lines on the chart area inside the axis lines. This is useful when there are multiple axes and you need to control which grid lines are drawn.
     */
    drawOnChartArea: boolean;
    /**
     * @property If true, draw lines beside the ticks in the axis area beside the chart.
     */
    drawTicks: boolean;
    /**
     * @property Length in pixels that the grid lines will draw into the axis area.
     */
    tickMarkLength: number;
    /**
     * @property Stroke width of the grid line for the first index (index 0).
     */
    zeroLineWidth: number;
    /**
     * @property Stroke color of the grid line for the first index (index 0).
     */
    zeroLineColor: string;
    /**
     * @property Length and spacing of dashes of the grid line for the first index (index 0).
     */
    zeroLineBorderDash: number[];
    /**
     * @property Offset for line dashes of the grid line for the first index (index 0).
     */
    zeroLineBorderDashOffset: number;
    /**
     * @property If true, grid lines will be shifted to be between labels. This is set to true for a bar chart by default.
     */
    offsetGridLines: boolean;
    /**
     * @property z-index of gridline layer. Values <= 0 are drawn under datasets, > 0 on top.
     */
    z: number;
}