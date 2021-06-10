export namespace NGChart {
    export interface ChartConfiguration {
        data?: ChartData;
        options?: ChartOptions;
    }

    export interface ChartData {
        label: string;
    }

    export interface LabelValue extends ChartData {
        value: number;
    }

    export interface NestedLabelValue extends ChartData {
        value: LabelValue[];
    }

    export interface ChartOptions {
        responsive?: boolean;
        responsiveAnimationDuration?: number;
        aspectRatio?: number;
        maintainAspectRatio?: boolean;
        dataset?: ChartDataSetOptions;
        title?: ChartTitleOptions;
        legend?: ChartLegendOptions;
        tooltips?: ChartTooltipOptions;
        hover?: ChartHoverOptions;
        animation?: ChartAnimationOptions;
        layout?: ChartLayoutOptions;
        scale?: RadialLinearScale;
        scales?: ChartScales | LinearScale | LogarithmicScale;
        label?: ChartLabelOptions;
        showLines?: boolean;
        spanGaps?: boolean;
        cutoutPercentage?: number;
        circumference?: number;
        rotation?: number;
        devicePixelRatio?: number;
    }

    export interface ChartDataSetOptions {
        /**
         * @property  Arc background color. String type of hex, rgb or rgba.
         */
        backgroundColor?: string | string[];
        barPercentage?: number;
        barThickness?: number | "flex";
        borderAlign?: BorderAlignment | BorderAlignment[];
        borderWidth?: number | number[];
        borderColor?: string | string[];
        borderCapStyle?: 'butt' | 'round' | 'square';
        borderDash?: number[];
        borderDashOffset?: number;
        borderJoinStyle?: 'bevel' | 'round' | 'miter';
        borderSkipped?: PositionType | PositionType[];
        categoryPercentage?: number;
        data?: Array<number | null | undefined | number[]>;
        fill?: boolean | number | string;
        hitRadius?: number | number[];
        hoverBackgroundColor?: string | string[];
        hoverBorderColor?: string | string[];
        hoverBorderWidth?: number | number[];
        hoverRadius?: number;
        label?: string;
        lineTension?: number;
        maxBarThickness?: number;
        minBarLength?: number;
        steppedLine?: 'before' | 'after' | 'middle' | boolean;
        order?: number;
        pointBorderColor?: string | string[];
        pointBackgroundColor?: string | string[];
        pointBorderWidth?: number | number[];
        pointRadius?: number | number[];
        pointRotation?: number | number[];
        pointHoverRadius?: number | number[];
        pointHitRadius?: number | number[];
        pointHoverBackgroundColor?: string | string[];
        pointHoverBorderColor?: string | string[];
        pointHoverBorderWidth?: number | number[];
        pointStyle?: PointStyle;
        radius?: number | number[];
        rotation?: number | number[];
        xAxisID?: string;
        yAxisID?: string;
        type?: ChartType | string;
        hidden?: boolean;
        hideInLegendAndTooltip?: boolean;
        showLine?: boolean;
        stack?: string;
        spanGaps?: boolean;
        weight?: number;
    }

    export interface ChartTitleOptions {
        display?: boolean;
        position?: PositionType;
        fullWidth?: boolean;
        fontSize?: number;
        fontFamily?: string;
        fontColor?: string;
        fontStyle?: string;
        padding?: number;
        lineHeight?: number | string;
        text?: string | string[];
    }

    export interface ChartLegendOptions {
        align?: 'center' | 'end' | 'start';
        display?: boolean;
        position?: PositionType;
        fullWidth?: boolean;
        labels?: ChartLegendLabelOptions;
        reverse?: boolean;
        rtl?: boolean;
        textDirection?: string;
    }

    export interface ChartTooltipOptions {
        axis?: 'x' | 'y' | 'xy';
        enabled?: boolean;
        mode?: InteractionMode;
        intersect?: boolean;
        backgroundColor?: string | string[];
        titleAlign?: TextAlignment;
        titleFontFamily?: string;
        titleFontSize?: number;
        titleFontStyle?: string;
        titleFontColor?: string | string[];
        titleSpacing?: number;
        titleMarginBottom?: number;
        bodyAlign?: TextAlignment;
        bodyFontFamily?: string;
        bodyFontSize?: number;
        bodyFontStyle?: string;
        bodyFontColor?: string | string[];
        bodySpacing?: number;
        footerAlign?: TextAlignment;
        footerFontFamily?: string;
        footerFontSize?: number;
        footerFontStyle?: string;
        footerFontColor?: string | string[];
        footerSpacing?: number;
        footerMarginTop?: number;
        xPadding?: number;
        yPadding?: number;
        caretSize?: number;
        cornerRadius?: number;
        multiKeyBackground?: string;
        position?: PositionMode;
        caretPadding?: number;
        displayColors?: boolean;
        borderColor?: string | string[];
        borderWidth?: number;
        rtl?: boolean;
        textDirection?: string;
    }

    export interface ChartHoverOptions {
        mode?: InteractionMode;
        animationDuration?: number;
        intersect?: boolean;
        axis?: 'x' | 'y' | 'xy';
    }

    export interface ChartAnimationOptions {
        duration?: number;
        easing?: Easing;
        animateRotate?: boolean;
        animateScale?: boolean;
    }

    export interface ChartLayoutOptions {
        padding?: ChartLayoutPaddingObject | number;
    }

    export interface RadialLinearScale {
        animate?: boolean;
        position?: PositionType;
        angleLines?: AngleLineOptions;
        pointLabels?: PointLabelOptions;
        ticks?: LinearTickOptions;
        display?: boolean;
        gridLines?: GridLineOptions;
    }

    export interface ChartScales {
        type?: ScaleType | string;
        display?: boolean;
        position?: PositionType | string;
        gridLines?: GridLineOptions;
        scaleLabel?: ScaleTitleOptions;
        ticks?: TickOptions;
        xAxes?: ChartXAxe[];
        yAxes?: ChartYAxe[];
    }

    export interface LinearScale extends ChartScales {
        ticks?: LinearTickOptions;
    }

    export interface LogarithmicScale extends ChartScales {
        ticks?: LogarithmicTickOptions;
    }

    export interface ChartLegendLabelOptions {
        boxWidth?: number;
        fontSize?: number;
        fontStyle?: string;
        fontColor?: string;
        fontFamily?: string;
        padding?: number;
        usePointStyle?: boolean;
    }

    export interface ChartLayoutPaddingObject {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    }

    export interface AngleLineOptions {
        display?: boolean;
        color?: string | string[];
        lineWidth?: number;
        borderDash?: number[];
        borderDashOffset?: number;
    }

    export interface PointLabelOptions {
        fontColor?: string | string[];
        fontFamily?: string;
        fontSize?: number;
        fontStyle?: string;
        lineHeight?: number | string;
    }

    export interface TickOptions extends NestedTickOptions {
        minor?: NestedTickOptions | false;
        major?: MajorTickOptions | false;
    }

    export interface NestedTickOptions {
        autoSkip?: boolean;
        autoSkipPadding?: number;
        backdropColor?: string | string[];
        backdropPaddingX?: number;
        backdropPaddingY?: number;
        beginAtZero?: boolean;
        display?: boolean;
        fontColor?: string | string[];
        fontFamily?: string;
        fontSize?: number;
        fontStyle?: string;
        labelOffset?: number;
        lineHeight?: number;
        max?: any;
        maxRotation?: number;
        maxTicksLimit?: number;
        min?: any;
        minRotation?: number;
        mirror?: boolean;
        padding?: number;
        precision?: number;
        reverse?: boolean;
        showLabelBackdrop?: boolean;
        source?: 'auto' | 'data' | 'labels';
        stepSize?: number;
        suggestedMax?: number;
        suggestedMin?: number;
    }

    export interface MajorTickOptions extends NestedTickOptions {
        enabled?: boolean;
    }

    export interface LinearTickOptions extends TickOptions {
        maxTicksLimit?: number;
        stepSize?: number;
        precision?: number;
        suggestedMin?: number;
        suggestedMax?: number;
    }

    export interface GridLineOptions {
        display?: boolean;
        circular?: boolean;
        color?: string | string[];
        borderDash?: number[];
        borderDashOffset?: number;
        lineWidth?: number | number[];
        drawBorder?: boolean;
        drawOnChartArea?: boolean;
        drawTicks?: boolean;
        tickMarkLength?: number;
        zeroLineWidth?: number;
        zeroLineColor?: string | string[];
        zeroLineBorderDash?: number[];
        zeroLineBorderDashOffset?: number;
        offsetGridLines?: boolean;
        z?: number;
    }

    export interface ScaleTitleOptions {
        display?: boolean;
        labelString?: string;
        lineHeight?: number | string;
        fontColor?: string | string[];
        fontFamily?: string;
        fontSize?: number;
        fontStyle?: string;
        padding?: ChartLayoutPaddingObject | number;
    }

    export interface CommonAxe {
        bounds?: string;
        type?: ScaleType | string;
        display?: boolean | string;
        id?: string;
        labels?: string[];
        stacked?: boolean;
        position?: string;
        ticks?: TickOptions;
        gridLines?: GridLineOptions;
        scaleLabel?: ScaleTitleOptions;
        offset?: boolean;
    }

    export interface ChartXAxe extends CommonAxe {
        distribution?: 'linear' | 'series';
    }

    export interface ChartYAxe extends CommonAxe {
    }

    export interface LogarithmicTickOptions extends TickOptions {
    }

    export interface ChartLabelOptions {
        align?: Indexable<Align>;
        anchor?: Indexable<Anchor>;
        backgroundColor?: Indexable<Color | null>;
        borderColor?: Indexable<Color | null>;
        borderRadius?: Indexable<number>;
        borderWidth?: Indexable<number>;
        clamp?: Indexable<boolean>;
        clip?: Indexable<boolean>;
        color?: Indexable<Color>;
        display?: Indexable<boolean | string>;
        font?: Indexable<Font>;
        offset?: Indexable<number>;
        opacity?: Indexable<number>;
        padding?: Indexable<Padding>;
        rotation?: Indexable<number>;
        textAlign?: Indexable<TextAlign>;
        textStrokeColor?: Indexable<Color>;
        textStrokeWidth?: Indexable<number>;
        textShadowBlur?: Indexable<number>;
        textShadowColor?: Indexable<Color>;
    }

    export type Align = 'bottom' | 'center' | 'end' | 'left' | 'right' | 'start' | 'top' | number;
    export type Anchor = 'center' | 'end' | 'start';
    export type Color = string | CanvasGradient | CanvasPattern;
    export type TextAlign = 'left' | 'right' | 'start' | 'center' | 'end';

    export type Font = {
        family?: string;
        lineHeight?: string | number;
        size?: number;
        style?: 'normal' | 'italic' | 'oblique';
        weight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number;
    };

    export type Padding = number | {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    };

    export type Indexable<T> = T | T[];

    export type PositionMode = 'average' | 'nearest'
    export type PositionType = 'left' | 'right' | 'top' | 'bottom' | 'chartArea';
    export type InteractionMode = 'point' | 'nearest' | 'single' | 'label' | 'index' | 'x-axis' | 'dataset' | 'x' | 'y';
    export type TextAlignment = 'left' | 'center' | 'right';
    export type Easing = 'linear' | 'easeInQuad' | 'easeOutQuad' | 'easeInOutQuad' | 'easeInCubic' | 'easeOutCubic' | 'easeInOutCubic' |
        'easeInQuart' | 'easeOutQuart' | 'easeInOutQuart' | 'easeInQuint' | 'easeOutQuint' | 'easeInOutQuint' | 'easeInSine' | 'easeOutSine' |
        'easeInOutSine' | 'easeInExpo' | 'easeOutExpo' | 'easeInOutExpo' | 'easeInCirc' | 'easeOutCirc' | 'easeInOutCirc' | 'easeInElastic' |
        'easeOutElastic' | 'easeInOutElastic' | 'easeInBack' | 'easeOutBack' | 'easeInOutBack' | 'easeInBounce' | 'easeOutBounce' | 'easeInOutBounce';
    export type ScaleType = 'category' | 'linear' | 'logarithmic' | 'radialLinear';
    export type BorderAlignment = 'center' | 'inner';
    export type PointStyle = 'circle' | 'cross' | 'crossRot' | 'dash' | 'line' | 'rect' | 'rectRounded' | 'rectRot' | 'star' | 'triangle';
    export type ChartType = 'line' | 'bar' | 'horizontalBar' | 'radar' | 'doughnut' | 'polarArea' | 'bubble' | 'pie' | 'scatter';

}