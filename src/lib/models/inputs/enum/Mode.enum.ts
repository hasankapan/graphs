export enum Mode{
    /* @When configuring interaction with the graph via hover or tooltips, a number of different modes are available. */
    /* point - Finds all of the items that intersect the point. */
    POINT = 'point',
    /* nearest - Gets the items that are at the nearest distance to the point. */
    NEAREST = 'nearest',
    /* index - Finds item at the same index. If the intersect setting is true, the first intersecting item is used to determine the index in the data. If intersect false the nearest item, in the x direction, is used to determine the index. */
    INDEX = 'index',
    /* dataset - Finds items in the same dataset. If the intersect setting is true, the first intersecting item is used to determine the index in the data. If intersect false the nearest item is used to determine the index. */
    DATASET = 'dataset',
    /* x - Returns all items that would intersect based on the X coordinate of the position only. */
    X = 'x',
    /* y - Returns all items that would intersect based on the Y coordinate of the position. */
    Y = 'y'
}