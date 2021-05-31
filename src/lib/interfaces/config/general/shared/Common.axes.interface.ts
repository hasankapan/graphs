import { Position } from "../../../../models/inputs/enum/Position.enum";
import { GridLines } from "./GridLine.interface";
import { ScaleLabel } from "./ScaleLabel.interface";
import { Ticks } from "./Ticks.interface";

export class Common {
    /**
     * @property Type of scale being employed. Custom scales can be created and registered with a string key. This allows changing the type of an axis for a chart.
     */
    type: string;
    /**
     * @property Position of the axis in the chart. Possible values are: 'top', 'left', 'bottom', 'right' or Position enum.
     */
    position: 'left' | 'top' | 'right' | 'bottom' | Position;
    /**
     * @property If true, extra space is added to the both edges and the axis is scaled to fit into the chart area. This is set to true for a bar chart by default.
     */
    offset: boolean;
    /**
     * @property The ID is used to link datasets and scale axes together.
     */
    id: string;
    /**
     * @property Grid line configuration.
     */
    gridLines: GridLines;
    /**
     * @property Scale Label Title configuration.
     */
    scaleLabel: ScaleLabel;
    /**
     * @property Tick configuration.
     */
    ticks: Ticks;
}