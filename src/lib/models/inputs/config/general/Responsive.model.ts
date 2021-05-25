export class Responsive {
    /* @param responsive - Resizes the chart canvas when its container does. */
    responsive: boolean = true;
    /* @param responsiveAnimationDuration - Duration in milliseconds it takes to animate to new size after a resize event. */
    responsiveAnimationDuration: number = 0;
    /* @param maintainAspectRatio - Maintain the original canvas aspect ratio (width / height) when resizing. */
    maintainAspectRatio: boolean = false;
    /* @param aspectRatio - Canvas aspect ratio (i.e. width / height, a value of 1 representing a square canvas). Note that this option is ignored if the height is explicitly defined either as attribute or via the style. */
    aspectRatio: number = 2;
}