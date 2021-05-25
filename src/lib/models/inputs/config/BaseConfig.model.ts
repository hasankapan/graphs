import { Animation } from "./general/Animation.model";
import { Layout } from "./general/Layout.model";
import { Legend } from "./general/Legend.model";
import { Responsive } from "./general/Responsive.model";
import { Title } from "./general/Title.model";
import { Tooltip } from "./general/Tooltip.model";

export class BaseConfig {
    responsive: Responsive = new Responsive();
    animation: Animation = new Animation();
    layout: Layout = new Layout();
    legend: Legend = new Legend();
    title: Title = new Title();
    tooltip: Tooltip = new Tooltip();
}