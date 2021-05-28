import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Messages } from '../../Message.ngss';
import { StatusMessage } from '../../models/calls/StatusMessage.model';
import { NameValue } from '../../interfaces/data/NameValue.interface';
import { PieGraphConfig } from '../../interfaces/config/PieGraphConfig.interface';
import { PieGraphConfigImpl } from '../../models/inputs/config/PieGraphConfigImpl.model';
import { merge } from 'lodash';

@Component({
  selector: 'ngss-pie-graph',
  templateUrl: './pie-graph.component.html',
  styleUrls: ['./pie-graph.component.css']
})
export class PieGraphComponent implements OnInit {
  chart: any;

  /* @input data to fill the chart, when it is blank, clear the canvas and write a message */
  @Input() data?: NameValue[];
  /* @input object to customize the chart, use default values when blank */
  @Input() config?: PieGraphConfig;
  /* @output returns the label value of the clicked piece */
  @Output() clickPiece = new EventEmitter<string>();
  /* graphic dom element */
  @ViewChild('graphCanvas', { static: true }) graphCanvas: ElementRef;

  constructor() { }

  ngOnInit() {
    this.prepare(this.data, this.config);
  }

  selectedContextEmitter(value:string) {
    this.clickPiece.emit(value);
  }

  prepare(data: NameValue[] | undefined, config: PieGraphConfig | undefined) {
    console.log(config);

    /* first, default settings are created, then they are combined with the values that come as parameters. */
    let mergedConfig: PieGraphConfig = merge(new PieGraphConfigImpl(), config)
    console.log(mergedConfig);

    (data == null) ? this.clearCanvasFillText(Messages.NO_DATA) : this.createPieChart(data, mergedConfig);
  }

  createPieChart(data: NameValue[], config: PieGraphConfig) {
    let that = this;
    this.chart = new Chart(this.graphCanvas.nativeElement, {
      plugins:[ChartDataLabels],
      type: 'pie',
      data: {
        datasets: [
          {
            data: [],
            backgroundColor: config.backgroundColor,
            borderAlign: config.borderAlign,
            borderColor: config.borderColor,
            borderWidth: config.borderWidth,
            hoverBackgroundColor: config.hoverBackgroundColor,
            hoverBorderColor: config.hoverBorderColor,
            hoverBorderWidth: config.hoverBorderWidth,
            weight: config.weight
          }
        ]
      },
      options: {
        responsive: config.responsive.responsive,
        responsiveAnimationDuration: config.responsive.responsiveAnimationDuration,
        maintainAspectRatio: config.responsive.maintainAspectRatio,
        aspectRatio: config.responsive.aspectRatio,
        plugins: {
          datalabels: {
            display: config.dataLabel.display,
            align: config.dataLabel.align,
            anchor: config.dataLabel.anchor,
            backgroundColor: config.dataLabel.backgroundColor,
            borderColor: config.dataLabel.borderColor,
            borderRadius: config.dataLabel.borderRadius,
            borderWidth: config.dataLabel.borderWidth,
            clamp: config.dataLabel.clamp,
            clip: config.dataLabel.clip,
            color: config.dataLabel.color,
            font: {
              family: config.dataLabel.font.family,
              size: config.dataLabel.font.size,
              style: config.dataLabel.font.style,
              weight: config.dataLabel.font.weight,
              lineHeight: config.dataLabel.font.lineHeight
            },
            offset: config.dataLabel.offset,
            opacity: config.dataLabel.opacity,
            padding: config.dataLabel.padding,
            rotation: config.dataLabel.rotation,
            textAlign: config.dataLabel.textAlign
        }
      },
        tooltips: {
          enabled: config.tooltip.enabled,
          mode: config.tooltip.mode,
          intersect: config.tooltip.intersect,
          backgroundColor: config.tooltip.backgroundColor,
          titleAlign: config.tooltip.titleAlign,
          titleFontFamily: config.tooltip.titleFontFamily,
          titleFontSize: config.tooltip.titleFontSize,
          titleFontStyle: config.tooltip.titleFontStyle,
          titleFontColor: config.tooltip.titleFontColor,
          titleSpacing: config.tooltip.titleSpacing,
          titleMarginBottom: config.tooltip.titleMarginBottom,
          bodyAlign: config.tooltip.bodyAlign,
          bodyFontFamily: config.tooltip.bodyFontFamily,
          bodyFontSize: config.tooltip.bodyFontSize,
          bodyFontStyle: config.tooltip.bodyFontStyle,
          bodyFontColor: config.tooltip.bodyFontColor,
          bodySpacing: config.tooltip.bodySpacing,
          footerAlign: config.tooltip.footerAlign,
          footerFontFamily: config.tooltip.footerFontFamily,
          footerFontSize: config.tooltip.footerFontSize,
          footerFontStyle: config.tooltip.footerFontStyle,
          footerFontColor: config.tooltip.footerFontColor,
          footerSpacing: config.tooltip.footerSpacing,
          footerMarginTop: config.tooltip.footerMarginTop,
          xPadding: config.tooltip.xPadding,
          yPadding: config.tooltip.yPadding,
          caretSize: config.tooltip.caretSize,
          cornerRadius: config.tooltip.cornerRadius,
          multiKeyBackground: config.tooltip.multiKeyBackground,
          position: config.tooltip.position,
          caretPadding: config.tooltip.caretPadding,
          displayColors: config.tooltip.displayColors,
          borderColor: config.tooltip.borderColor,
          borderWidth: config.tooltip.borderWidth,
          rtl: config.tooltip.rtl,
        },
        animation: {
          duration: config.animation.duration,
          easing: config.animation.easing,
          animateRotate: config.animation.animateRotate,
          animateScale: config.animation.animateScale
        },
        legend: {
          display: config.legend.display,
          position: config.legend.position,
          align: config.legend.align,
          fullWidth: config.legend.fullWidth,
          reverse: config.legend.reverse,
          rtl: config.legend.rtl,
          labels: {
            boxWidth: config.legend.labels.boxWidth,
            fontSize: config.legend.labels.fontSize,
            fontStyle: config.legend.labels.fontStyle,
            fontColor: config.legend.labels.fontColor,
            fontFamily: config.legend.labels.fontFamily,
            padding: config.legend.labels.padding
          }
        },
        title: {
          display: config.title.display,
          text: config.title.text,
          position: config.title.position,
          fontSize: config.title.fontSize,
          fontFamily: config.title.fontFamily,
          fontColor: config.title.fontColor,
          fontStyle: config.title.fontStyle,
          padding: config.title.padding,
          lineHeight: config.title.lineHeight
        },
        layout: config.layout,
        rotation: config.rotation,
        cutoutPercentage: config.cutoutPercentage,
        circumference: config.circumference,
        onClick: function myfc(c:any, i:any) {
          try {
            let e:any = i[0];
            var _value:string = e._model.label
            that.selectedContextEmitter(_value);
          }
          catch {

          }
        }
      }
    });

    this.prepareData(data).then((res: StatusMessage) => {
      if (res.status) {
        this.chart.update();
      } else {
        this.clearCanvasFillText(Messages.EXCEPTION_WHEN("fill data"));
      }
    }).catch((err: StatusMessage) => {
      this.clearCanvasFillText(Messages.EXCEPTION_WHEN_AND_CAUSE("fill data", err.message));
    })

  }

  prepareData(data: NameValue[]): Promise<StatusMessage> {
    return new Promise<StatusMessage>((resolve, reject) => {
      try {
        if (data != null) {
          for (let i = 0; i < data.length; i++) {
            this.chart.data.datasets[0].data[i] = Math.floor(data[i].value);
            this.chart.data.labels[i] = data[i].name;
          }
          resolve(new StatusMessage(true, "data filled successfully"));
        }else {
          resolve(new StatusMessage(false, "data can not be null or undefined"));
        }
      } catch (err) {
        console.log(err);
        reject(new StatusMessage(false, err));
      }
    });
  }

  clearCanvasFillText(text: string) {
    Chart.plugins.register({
      afterDraw: function (graphCanvas: any) {
        if (graphCanvas.data.datasets[0].data === null || graphCanvas.data.datasets[0].data.length === 0) {
          var ctx = graphCanvas.chart.ctx;
          var width = graphCanvas.chart.width;
          var height = graphCanvas.chart.height
          graphCanvas.clear();
          ctx.save();
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.font = "16px normal 'Helvetica Nueue'";
          ctx.fontColor = "#fff";
          ctx.fillText(text, width / 2, height / 2);
          ctx.restore();
        }
      }
    });
  }
}
