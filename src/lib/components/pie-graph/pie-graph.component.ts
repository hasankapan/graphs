import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NameValue } from '../../models/inputs/data/core/NameValue.model';
import { Chart } from 'chart.js';
import { PieGraphConfig } from '../../models/inputs/config/PieGraphConfig.model';
import { Messages } from '../../Ngss.message';
import { StatusMessage } from '../../models/calls/StatusMessage.model';

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

  selectedContextEmitter(value) {
    this.clickPiece.emit(value);
  }

  prepare(data: NameValue[], config: PieGraphConfig) {
    /* first, default settings are created, then they are combined with the values that come as parameters. */
    let mergedConfig: PieGraphConfig = Object.assign(new PieGraphConfig(), config);
    (data == null) ? this.clearCanvasFillText(Messages.NO_DATA) : this.createPieChart(data, mergedConfig);
  }

  createPieChart(data: NameValue[], config: PieGraphConfig) {
    let that = this;
    this.chart = new Chart(this.graphCanvas.nativeElement, {
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
        tooltips: {
          enabled: config.tooltip.enabled,
          intersect: config.tooltip.intersect,
          mode: config.tooltip.mode,
        },
        animation: {
          duration: config.animation.duration,
          easing: config.animation.easing,
          animationRotate: config.animation.animateRotate,
          animationScale: config.animation.animateScale
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
        onClick: function myfc(c, i) {
          try {
            let e = i[0];
            console.log(e);
            
            var _value = e._model.label
            that.selectedContextEmitter(_value);
            //add label value
          }
          catch{
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
    })

  }

  prepareData(data: NameValue[]): Promise<StatusMessage> {
    return new Promise<StatusMessage>((resolve, reject) => {
      try {
        for (let i = 0; i < data.length; i++) {
          this.chart.data.datasets[0].data[i] = Math.floor(data[i].getValue());
          this.chart.data.labels[i] = data[i].getName();
        }
        resolve(new StatusMessage(true, "data filled successfully"));
      } catch (err) {
        console.log(err);
        resolve(new StatusMessage(false, err));
      }
    });
  }

  clearCanvasFillText(text: string) {
    Chart.plugins.register({
      afterDraw: function (graphCanvas) {
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
