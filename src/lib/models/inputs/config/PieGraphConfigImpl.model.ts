import { Animation } from "../../../interfaces/config/general/Animation.interface";
import { DataLabel } from "../../../interfaces/config/general/DataLabel.interface";
import { Layout } from "../../../interfaces/config/general/Layout.interface";
import { Legend } from "../../../interfaces/config/general/Legend.interface";
import { Responsive } from "../../../interfaces/config/general/Responsive.interface";
import { Title } from "../../../interfaces/config/general/Title.interface";
import { Tooltip } from "../../../interfaces/config/general/Tooltip.interface";
import { PieGraphConfig } from "../../../interfaces/config/PieGraphConfig.interface";
import { BorderAlign } from "../enum/BorderAlign.enum";
import { AnimationImpl } from "./general/AnimationImpl.model";
import { DataLabelImpl } from "./general/DataLabelImpl.model";
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
    hoverBorderColor: string = '#cfa';
    hoverBorderWidth: number = 0;
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
    dataLabel: DataLabel = new DataLabelImpl();
}