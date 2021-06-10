import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Messages } from '../../Message.ngss';
import { StatusMessage } from '../../models/calls/StatusMessage.model';
import { NameValue } from '../../interfaces/data/NameValue.interface';
import { merge } from 'lodash';
import { NGChart } from '../../interfaces/index/NGChart.namespace';
import { NGChartDefaults } from '../../models/index/NGChartDefaults.namespace';
import { GraphService } from '../../services/graph.service';

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
  @Input() config?: NGChartDefaults.PieChartOptions;
  /* @output returns the label value of the clicked piece */
  @Output() clickPiece = new EventEmitter<string>();
  /* graphic dom element */
  @ViewChild('graphCanvas', { static: true }) graphCanvas: ElementRef;

  constructor(private graphService: GraphService) { }

  ngOnInit() {
    this.prepare(this.data, this.config);
  }

  selectedContextEmitter(value: string) {
    this.clickPiece.emit(value);
  }

  prepare(data: NameValue[] | undefined, config: NGChart.ChartOptions | undefined) {

    /* first, default settings are created, then they are combined with the values that come as parameters. */
    let mergedConfig: NGChart.ChartOptions = merge(this.graphService, config);

    (data == null) ? this.clearCanvasFillText(Messages.NO_DATA) : this.createPieChart(data, mergedConfig);
  }

  createPieChart(data: NameValue[], config: NGChart.ChartOptions) {
    let that = this;
    this.chart = new Chart(this.graphCanvas.nativeElement, {
      plugins: [ChartDataLabels],
      type: 'pie',
      data: {
        datasets: [
          {
            data:[], 
            backgroundColor:config.dataset.backgroundColor, 
            barPercentage:config.dataset.barPercentage, 
            barThickness:config.dataset.barThickness, 
            borderAlign:config.dataset.borderAlign, 
            borderWidth:config.dataset.borderWidth, 
            borderColor:config.dataset.borderColor, 
            borderCapStyle:config.dataset.borderCapStyle, 
            borderDash:config.dataset.borderDash, 
            borderDashOffset:config.dataset.borderDashOffset, 
            borderJoinStyle:config.dataset.borderJoinStyle, 
            borderSkipped:config.dataset.borderSkipped, 
            categoryPercentage:config.dataset.categoryPercentage, 
            fill:config.dataset.fill, 
            hitRadius:config.dataset.hitRadius, 
            hoverBackgroundColor:config.dataset.hoverBackgroundColor, 
            hoverBorderColor:config.dataset.hoverBorderColor, 
            hoverBorderWidth:config.dataset.hoverBorderWidth, 
            hoverRadius:config.dataset.hoverRadius, 
            label:config.dataset.label, 
            lineTension:config.dataset.lineTension, 
            maxBarThickness:config.dataset.maxBarThickness, 
            minBarLength:config.dataset.minBarLength, 
            steppedLine:config.dataset.steppedLine, 
            order:config.dataset.order, 
            pointBorderColor:config.dataset.pointBorderColor, 
            pointBackgroundColor:config.dataset.pointBackgroundColor, 
            pointBorderWidth:config.dataset.pointBorderWidth, 
            pointRadius:config.dataset.pointRadius, 
            pointRotation:config.dataset.pointRotation, 
            pointHoverRadius:config.dataset.pointHoverRadius, 
            pointHitRadius:config.dataset.pointHitRadius, 
            pointHoverBackgroundColor:config.dataset.pointHoverBackgroundColor, 
            pointHoverBorderColor:config.dataset.pointHoverBorderColor, 
            pointHoverBorderWidth:config.dataset.pointHoverBorderWidth, 
            pointStyle:config.dataset.pointStyle, 
            radius:config.dataset.radius, 
            rotation:config.dataset.rotation, 
            xAxisID:config.dataset.xAxisID, 
            yAxisID:config.dataset.yAxisID, 
            type:config.dataset.type, 
            hidden:config.dataset.hidden, 
            hideInLegendAndTooltip:config.dataset.hideInLegendAndTooltip, 
            showLine:config.dataset.showLine, 
            stack:config.dataset.stack, 
            spanGaps:config.dataset.spanGaps, 
            weight:config.dataset.weight, 
          }
        ]
      },
      options: {
        responsive: config.responsive,
        responsiveAnimationDuration: config.responsiveAnimationDuration,
        maintainAspectRatio: config.maintainAspectRatio,
        aspectRatio: config.aspectRatio,
        plugins: {
          datalabels: config.label
        },
        tooltips: config.tooltips,
        animation: config.animation,
        legend: config.legend,
        title: config.title,
        layout: config.layout,
        rotation: config.rotation,
        cutoutPercentage: config.cutoutPercentage,
        circumference: config.circumference,
        onClick: function click(c: any, i: any) {
          try {
            let e: any = i[0];
            var _value: string = e._model.label
            that.selectedContextEmitter(_value);
          }
          catch (err) {
            console.log(err);
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
        } else {
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
