export class Ticks {
    /**
     * @property User defined minimum value for the scale, overrides minimum value from data.
     */
    min: number;
    /**
     * @property User defined maximum value for the scale, overrides maximum value from data.
     */
    max: number;
    /**
     * @property The number of ticks to examine when deciding how many labels will fit. Setting a smaller value will be faster, but may be less accurate when there is large variability in label length.
     */
    sampleSize: number;
    /**
     * @property If true, automatically calculates how many labels can be shown and hides labels accordingly. Labels will be rotated up to maxRotation before skipping any. Turn autoSkip off to show all labels no matter what.
     */
    autoSkip: boolean;
    /**
     * @property Padding between the ticks on the horizontal axis when autoSkip is enabled.
     */
    autoSkipPadding: number;
    /**
     * @property Distance in pixels to offset the label from the centre point of the tick (in the x direction for the x axis, and the y direction for the y axis). Note: this can cause labels at the edges to be cropped by the edge of the canvas. 
     */
    labelOffset: number;
    /**
     * @property Maximum rotation for tick labels when rotating to condense labels. Note: Rotation doesn't occur until necessary. Note: Only applicable to horizontal scales.
     */
    maxRotation: number;
    /**
     * @property Minimum rotation for tick labels. Note: Only applicable to horizontal scales.
     */
    minRotation: number;
    /**
     * @property Flips tick labels around axis, displaying the labels inside the chart instead of outside. Note: Only applicable to vertical scales.
     */
    mirror: boolean;
    /**
     * @property Padding between the tick label and the axis. When set on a vertical axis, this applies in the horizontal (X) direction. When set on a horizontal axis, this applies in the vertical (Y) direction.
     */
    padding: number;
    /**
     * @property An array of labels to display.
     */
    labels: string[];
    /**
     * @property if true, scale will include 0 if it is not already included.
     */
    beginAtZero: boolean;
    /**
     * @property Maximum number of ticks and gridlines to show.
     */
    maxTicksLimit: number;
    /**
     * @property if defined and stepSize is not specified, the step size will be rounded to this many decimal places.
     */
    precision: number;
    /**
     * @property User defined fixed step size for the scale.
     */
    stepSize: number;
    /**
     * @property Adjustment used when calculating the maximum data value.
     */
    suggestedMax: number;
    /**
     * @property Adjustment used when calculating the minimum data value.
     */
    suggestedMin: number;
}