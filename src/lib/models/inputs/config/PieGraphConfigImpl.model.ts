import { Animation } from "../../../interfaces/config/general/Animation.model";
import { Layout } from "../../../interfaces/config/general/Layout.model";
import { Legend } from "../../../interfaces/config/general/Legend.model";
import { Responsive } from "../../../interfaces/config/general/Responsive.model";
import { Title } from "../../../interfaces/config/general/Title.model";
import { Tooltip } from "../../../interfaces/config/general/Tooltip.model";
import { PieGraphConfig } from "../../../interfaces/config/PieGraphConfig.model";
import { BorderAlign } from "../enum/BorderAlign.enum";
import { AnimationImpl } from "./general/AnimationImpl.model";
import { LayoutImpl } from "./general/LayoutImpl.model";
import { LegendImpl } from "./general/LegendImpl.model";
import { ResponsiveImpl } from "./general/ResponsiveImpl.model";
import { TitleImpl } from "./general/TitleImpl.model";
import { TooltipImpl } from "./general/TooltipImpl.model";

export class PieGraphConfigImpl implements PieGraphConfig{
    backgroundColor: string[] = ['#6a3a4f', '#513e5c', '#c7aabc', '#c77a8c', '#b15258']
    borderColor: string = '#fff';
    borderWidth: number = 2;
    weight: number = 1;
    hoverBackgroundColor: string = undefined;
    hoverBorderColor: string = '#cfa';
    hoverBorderWidth: number = 2;
    borderAlign: BorderAlign = BorderAlign.CENTER;
    borderRadius: number = 0;
    cutoutPercentage: number = 0;
    rotation: number = -0.5 * Math.PI;
    circumference: number = 2 * Math.PI;
    noDataWarning: string = "Has no data.";
    responsive: Responsive = new ResponsiveImpl();
    animation: Animation = new AnimationImpl();
    layout: Layout = new LayoutImpl();
    legend: Legend = new LegendImpl();
    title: Title = new TitleImpl();
    tooltip: Tooltip = new TooltipImpl();
}