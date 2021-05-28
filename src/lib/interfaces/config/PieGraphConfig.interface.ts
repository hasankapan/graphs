import { BorderAlign } from "../../models/inputs/enum/BorderAlign.enum";
import { Animation } from "./general/Animation.interface";
import { DataLabel } from "./general/DataLabel.interface";
import { Layout } from "./general/Layout.interface";
import { Legend } from "./general/Legend.interface";
import { Responsive } from "./general/Responsive.interface";
import { Title } from "./general/Title.interface";
import { Tooltip } from "./general/Tooltip.interface";

export interface PieGraphConfig{
    /**
     * @property  Arc background color. String type of hex, rgb or rgba.
     */
    backgroundColor: string[];
    /**
     * @property  Arc border color. String type of hex, rgb or rgba.
     */
    borderColor: string;
    /**
     * @property  Arc border width (in pixels).
     */
    borderWidth: number;
    /**
     * @property  The relative thickness of the dataset. 
     * Providing a value for weight will cause the pie or doughnut dataset to be drawn with a thickness relative to the sum of all the dataset weight values.
     */
    weight: number;
    /* Interactions */
    /**
     * @property  Arc background color when hovered.
     */
    hoverBackgroundColor?: string;
    /**
     * @property  Arc border color when hovered.
     */
    hoverBorderColor: string;
    /**
     * @property  Arc border width when hovered (in pixels).
     */
    hoverBorderWidth: number;
    /* Border */
    /**
     * @property  Descriptions inside the type.
     */
    borderAlign: BorderAlign;
    /**
     * @property  Border radius applied to all corners of the arc.
     */
    borderRadius: number;
    /* Options */
    /**
     * @property  The portion of the chart that is cut out of the middle. 
     * If string and ending with '%', percentage of the chart radius. 
     * Number is considered to be pixels.
     */
    cutoutPercentage: number;
    /**
     * @property  Starting angle to draw arcs from.
     */
    rotation: number;
    /**
     * @property  Sweep to allow arcs to cover.
     */
    circumference: number;
    /* Canvas Options */
    /**
     * @property  If data null or undefined. Graph canvas will be cleared and write the noDataWarning test in middle of canvas.
     */
    noDataWarning: string;
    
    responsive: Responsive;
    animation: Animation;
    layout: Layout;
    legend: Legend;
    title: Title;
    tooltip: Tooltip;
    dataLabel: DataLabel;
}