import { BorderAlign } from "../enum/BorderAlign.enum";
import { BaseConfig } from "./BaseConfig.model";

export class PieGraphConfig extends BaseConfig{
    /* Styling */
    /* @param backgrounColor - Arc background color. String type of hex, rgb or rgba */
    backgroundColor: string[] = ['#6a3a4f', '#513e5c', '#c7aabc', '#c77a8c', '#b15258']
    /* @param borderColor - Arc border color. String type of hex, rgb or rgba */
    borderColor: string = '#fff';
    /* @param borderWidth - Arc border width (in pixels). */
    borderWidth: number = 2;
    /* param weight -
    The relative thickness of the dataset. 
    Providing a value for weight will cause the pie or doughnut dataset to be drawn with a thickness relative to the sum of all the dataset weight values. */
    weight: number = 1;

    /* Interactions */
    /* @param hoverBackgroundColor - Arc background color when hovered. */
    hoverBackgroundColor: string = undefined;
    /* @param hoverBorderColor - Arc border color when hovered. */
    hoverBorderColor: string = '#cfa';
    /* @param hoverBorderWidth - Arc border width when hovered (in pixels). */
    hoverBorderWidth: number = 2;

    /* Border */
    /* @param borderAllign - Descriptions inside the type. */
    borderAlign: BorderAlign = BorderAlign.CENTER;
    /* @param borderRadius - Border radius applied to all corners of the arc. */
    borderRadius: number = 0;

    /* Options */
    /* @param cutout - The portion of the chart that is cut out of the middle. If string and ending with '%', percentage of the chart radius. number is considered to be pixels. */
    cutoutPercentage: number = 0;
    /* @param rotation - Starting angle to draw arcs from. */
    rotation: number = -0.5 * Math.PI;
    /* @param circumference - Sweep to allow arcs to cover. */
    circumference: number = 2 * Math.PI;
    /* Canvas Options */
    noDataWarning: string = "Has no data.";
}