import { Common } from "./shared/Common.axes.interface";

export class Axes {
    /**
     * @property Controls the axis global visibility (visible when true, hidden when false). When display: 'auto', the axis is visible only if at least one associated dataset is visible.
     */
    display: boolean;
    /**
     * @property The weight used to sort the axis. Higher weights are further away from the chart area.
     */
    weight: number;
    /**
     * @property x-y common axes configuration.
     */
    commons: Common;
}