import { BorderAlign } from "../../models/inputs/enum/BorderAlign.enum";
import { Animation } from "./general/Animation.model";
import { Layout } from "./general/Layout.model";
import { Legend } from "./general/Legend.model";
import { Responsive } from "./general/Responsive.model";
import { Title } from "./general/Title.model";
import { Tooltip } from "./general/Tooltip.model";

export interface PieGraphConfig{
    /* Styling */
    /* @param backgrounColor - Arc background color. String type of hex, rgb or rgba */
    backgroundColor: string[];
    /* @param borderColor - Arc border color. String type of hex, rgb or rgba */
    borderColor: string;
    /* @param borderWidth - Arc border width (in pixels). */
    borderWidth: number;
    /* param weight -
    The relative thickness of the dataset. 
    Providing a value for weight will cause the pie or doughnut dataset to be drawn with a thickness relative to the sum of all the dataset weight values. */
    weight: number;
    /* Interactions */
    /* @param hoverBackgroundColor - Arc background color when hovered. */
    hoverBackgroundColor: string;
    /* @param hoverBorderColor - Arc border color when hovered. */
    hoverBorderColor: string;
    /* @param hoverBorderWidth - Arc border width when hovered (in pixels). */
    hoverBorderWidth: number;
    /* Border */
    /* @param borderAllign - Descriptions inside the type. */
    borderAlign: BorderAlign;
    /* @param borderRadius - Border radius applied to all corners of the arc. */
    borderRadius: number;
    /* Options */
    /* @param cutout - The portion of the chart that is cut out of the middle. If string and ending with '%', percentage of the chart radius. number is considered to be pixels. */
    cutoutPercentage: number;
    /* @param rotation - Starting angle to draw arcs from. */
    rotation: number;
    /* @param circumference - Sweep to allow arcs to cover. */
    circumference: number;
    /* Canvas Options */
    noDataWarning: string;
    
    responsive: Responsive;
    animation: Animation;
    layout: Layout;
    legend: Legend;
    title: Title;
    tooltip: Tooltip;
}