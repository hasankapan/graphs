export interface Responsive {
    /**
     * @property  Resizes the chart canvas when its container does.
     */
    responsive: boolean;
    /**
     * @property  Duration in milliseconds it takes to animate to new size after a resize event.
     */
    responsiveAnimationDuration: number;
    /**
     * @property  Maintain the original canvas aspect ratio (width / height) when resizing.
     */
    maintainAspectRatio: boolean;
    /**
     * @property  Canvas aspect ratio (i.e. width / height, a value of 1 representing a square canvas). 
     * Note that this option is ignored if the height is explicitly defined either as attribute or via the style.
     */
    aspectRatio: number;
}