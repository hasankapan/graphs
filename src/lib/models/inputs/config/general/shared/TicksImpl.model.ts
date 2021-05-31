import { Ticks } from "projects/graphs/src/lib/interfaces/config/general/shared/Ticks.interface";

export class TicksImpl implements Ticks {
    min: number;
    max: number;
    sampleSize: number = 1;
    autoSkip: boolean = true;
    autoSkipPadding: number = 0;
    labelOffset: number = 0;
    maxRotation: number = 0;
    minRotation: number = 0;
    mirror: boolean = false;
    padding: number = 0;
    labels: string[] = [];
    beginAtZero: boolean = true;
    maxTicksLimit: number = 11;
    precision: number;
    stepSize: number;
    suggestedMax: number;
    suggestedMin: number;
}