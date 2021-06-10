import { NGChart } from "../../interfaces/index/NGChart.namespace";

export namespace NGChartDefaults {
    const fontFamily:string = 'system-ui';
    const fontSize:number = 17;
    const titleFontSize:number = 20;
    const fontColor:string = '#666';
    const reverseFontColor:string = '#fff';
	const fontStyle:string = 'normal';
    const titleFontStyle:string = 'normal';

	const lineHeight:number = 1;
    const spacing:number = 2;
    const align: NGChart.TextAlignment = 'left';

    export class PieChartOptions implements NGChart.ChartOptions {
        responsive: boolean = true;
        responsiveAnimationDuration: number = 0;
        aspectRatio?: number = 4;
        maintainAspectRatio?: boolean = true;
        dataset?: NGChart.ChartDataSetOptions = {
            backgroundColor: ['#6a3a4f', '#513e5c', '#c7aabc', '#c77a8c', '#b15258'],
            borderWidth: 2,
            hoverBorderColor: "#cfa"
        } as NGChart.ChartDataSetOptions;

        title?: NGChart.ChartTitleOptions = {
            display: true,
            position: 'top',
            fontSize: titleFontSize,
            fontFamily: fontFamily,
            fontColor: fontColor,
            fontStyle: titleFontStyle,
            padding: 10,
            lineHeight: lineHeight,
            text: 'custom'
        } as NGChart.ChartTitleOptions;

        legend?: NGChart.ChartLegendOptions = {
            display: true,
            position: 'left',
            align: 'start',
            fullWidth: false,
            reverse: false,
            labels: {
                boxWidth: 40,
                fontSize: fontSize,
                fontStyle: fontStyle,
                fontColor: fontColor,
                fontFamily: fontFamily,
                padding: 10,
                usePointStyle: false
            } as NGChart.ChartLegendLabelOptions,
        } as NGChart.ChartLegendOptions;

        tooltips?: NGChart.ChartTooltipOptions = {
            enabled: true,
            mode: 'nearest',
            intersect: true,
            position: 'average',
            backgroundColor: '#000',
            titleFontFamily: fontFamily,
            titleFontSize: titleFontSize,
            titleFontStyle: titleFontStyle,
            titleFontColor: reverseFontColor,
            titleAlign: align,
            titleSpacing: spacing,
            titleMarginBottom: 5,
            bodyFontFamily: fontFamily,
            bodyFontSize: fontSize,
            bodyFontStyle: fontStyle,
            bodyFontColor: reverseFontColor,
            bodyAlign: align,
            bodySpacing: spacing,
            footerFontFamily: fontFamily,
            footerFontSize: fontSize,
            footerFontStyle: fontStyle,
            footerFontColor: reverseFontColor,
            footerAlign: align,
            footerSpacing: spacing,
            footerMarginTop: 5,
            xPadding: 5,
            yPadding: 5,
            caretPadding: 3,
            caretSize: 6,
            cornerRadius: 6,
            multiKeyBackground: '#fff',
            displayColors: true,
            borderColor: '#000',
            borderWidth: 0,
        } as NGChart.ChartTooltipOptions;
        hover?: NGChart.ChartHoverOptions = { } as NGChart.ChartHoverOptions;
        animation?: NGChart.ChartAnimationOptions = {
            duration: 1000,
            easing: 'easeInOutQuad',
        } as NGChart.ChartAnimationOptions;
        layout?: NGChart.ChartLayoutOptions = {
            padding: 1
        } as NGChart.ChartLayoutOptions;
        scale?: NGChart.RadialLinearScale = { } as NGChart.RadialLinearScale;
        scales?: NGChart.ChartScales | NGChart.LinearScale | NGChart.LogarithmicScale = {
            display: true,
            gridLines: { } as NGChart.GridLineOptions,
            xAxes: { } as NGChart.ChartXAxe,
            yAxes: { } as NGChart.ChartYAxe
        } as NGChart.ChartScales;
        label?: NGChart.ChartLabelOptions = {
            color: '#fff',
            font: {
                family: fontFamily,
                size: titleFontSize,
                style: fontStyle,
                weight: 1,
                lineHeight: lineHeight
            }
        } as NGChart.ChartLabelOptions;
        cutoutPercentage?: number = 50;
        circumference?: number = 2 * Math.PI;
        rotation?: number = -0.5 * Math.PI;
        devicePixelRatio?: number = window.devicePixelRatio;
    }
}
