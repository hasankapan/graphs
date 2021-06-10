/*
 * Public API Surface of graphs
 */

export * from './lib/graphs.module';

export * from './lib/services/graph.service';

export * from './lib/graphs.component';
export * from './lib/components/pie-graph/pie-graph.component';

export * from './lib/interfaces/index/NGChart.namespace';
export * from './lib/models/index/NGChartDefaults.namespace';

export * from './lib/interfaces/config/PieGraphConfig.interface';

export * from './lib/interfaces/config/general/Animation.interface';
export * from './lib/interfaces/config/general/Axes.interface';
export * from './lib/interfaces/config/general/DataLabel.interface';
export * from './lib/interfaces/config/general/Layout.interface';
export * from './lib/interfaces/config/general/Legend.interface';
export * from './lib/interfaces/config/general/Responsive.interface';
export * from './lib/interfaces/config/general/Title.interface';
export * from './lib/interfaces/config/general/Tooltip.interface';

export * from './lib/interfaces/config/general/shared/Common.axes.interface';
export * from './lib/interfaces/config/general/shared/GridLine.interface';
export * from './lib/interfaces/config/general/shared/LegendLabel.interface';
export * from './lib/interfaces/config/general/shared/Padding.interface';
export * from './lib/interfaces/config/general/shared/ScaleLabel.interface';
export * from './lib/interfaces/config/general/shared/Style.interface';
export * from './lib/interfaces/config/general/shared/Ticks.interface';

export * from './lib/interfaces/data/BaseData.interface';
export * from './lib/interfaces/data/NameNestedValue.interface';
export * from './lib/interfaces/data/NameValue.interface';

export * from './lib/models/inputs/enum/Align.enum';
export * from './lib/models/inputs/enum/BorderAlign.enum';
export * from './lib/models/inputs/enum/Easing.enum';
export * from './lib/models/inputs/enum/FontStyle.enum';
export * from './lib/models/inputs/enum/Mode.enum';
export * from './lib/models/inputs/enum/Position.enum';
export * from './lib/models/inputs/enum/TooltipAlign.enum';
export * from './lib/models/inputs/enum/TooltipPosition.enum';
