import { Responsive } from "../../../../interfaces/config/general/Responsive.model";

export class ResponsiveImpl implements Responsive {
    responsive: boolean = true;
    responsiveAnimationDuration: number = 0;
    maintainAspectRatio: boolean = false;
    aspectRatio: number = 2;
}