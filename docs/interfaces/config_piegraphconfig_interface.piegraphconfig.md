[ngss-graphs - v0.1.3](../README.md) / [Exports](../modules.md) / [config/PieGraphConfig.interface](../modules/config_piegraphconfig_interface.md) / PieGraphConfig

# Interface: PieGraphConfig

[config/PieGraphConfig.interface](../modules/config_piegraphconfig_interface.md).PieGraphConfig

## Table of contents

### Properties

- [animation](config_piegraphconfig_interface.piegraphconfig.md#animation)
- [backgroundColor](config_piegraphconfig_interface.piegraphconfig.md#backgroundcolor)
- [borderAlign](config_piegraphconfig_interface.piegraphconfig.md#borderalign)
- [borderColor](config_piegraphconfig_interface.piegraphconfig.md#bordercolor)
- [borderRadius](config_piegraphconfig_interface.piegraphconfig.md#borderradius)
- [borderWidth](config_piegraphconfig_interface.piegraphconfig.md#borderwidth)
- [circumference](config_piegraphconfig_interface.piegraphconfig.md#circumference)
- [cutoutPercentage](config_piegraphconfig_interface.piegraphconfig.md#cutoutpercentage)
- [dataLabel](config_piegraphconfig_interface.piegraphconfig.md#datalabel)
- [hoverBackgroundColor](config_piegraphconfig_interface.piegraphconfig.md#hoverbackgroundcolor)
- [hoverBorderColor](config_piegraphconfig_interface.piegraphconfig.md#hoverbordercolor)
- [hoverBorderWidth](config_piegraphconfig_interface.piegraphconfig.md#hoverborderwidth)
- [layout](config_piegraphconfig_interface.piegraphconfig.md#layout)
- [legend](config_piegraphconfig_interface.piegraphconfig.md#legend)
- [noDataWarning](config_piegraphconfig_interface.piegraphconfig.md#nodatawarning)
- [responsive](config_piegraphconfig_interface.piegraphconfig.md#responsive)
- [rotation](config_piegraphconfig_interface.piegraphconfig.md#rotation)
- [title](config_piegraphconfig_interface.piegraphconfig.md#title)
- [tooltip](config_piegraphconfig_interface.piegraphconfig.md#tooltip)
- [weight](config_piegraphconfig_interface.piegraphconfig.md#weight)

## Properties

### animation

• **animation**: [*Animation*](config_general_animation_interface.animation.md)

Defined in: config/PieGraphConfig.interface.ts:72

___

### backgroundColor

• **backgroundColor**: *string*[]

**`property`** Arc background color. String type of hex, rgb or rgba.

Defined in: config/PieGraphConfig.interface.ts:14

___

### borderAlign

• **borderAlign**: BorderAlign

**`property`** Descriptions inside the type.

Defined in: config/PieGraphConfig.interface.ts:45

___

### borderColor

• **borderColor**: *string*

**`property`** Arc border color. String type of hex, rgb or rgba.

Defined in: config/PieGraphConfig.interface.ts:18

___

### borderRadius

• **borderRadius**: *number*

**`property`** Border radius applied to all corners of the arc.

Defined in: config/PieGraphConfig.interface.ts:49

___

### borderWidth

• **borderWidth**: *number*

**`property`** Arc border width (in pixels).

Defined in: config/PieGraphConfig.interface.ts:22

___

### circumference

• **circumference**: *number*

**`property`** Sweep to allow arcs to cover.

Defined in: config/PieGraphConfig.interface.ts:64

___

### cutoutPercentage

• **cutoutPercentage**: *number*

**`property`** The portion of the chart that is cut out of the middle.
If string and ending with '%', percentage of the chart radius.
Number is considered to be pixels.

Defined in: config/PieGraphConfig.interface.ts:56

___

### dataLabel

• **dataLabel**: [*DataLabel*](config_general_datalabel_interface.datalabel.md)

Defined in: config/PieGraphConfig.interface.ts:77

___

### hoverBackgroundColor

• `Optional` **hoverBackgroundColor**: *string*

**`property`** Arc background color when hovered.

Defined in: config/PieGraphConfig.interface.ts:32

___

### hoverBorderColor

• **hoverBorderColor**: *string*

**`property`** Arc border color when hovered.

Defined in: config/PieGraphConfig.interface.ts:36

___

### hoverBorderWidth

• **hoverBorderWidth**: *number*

**`property`** Arc border width when hovered (in pixels).

Defined in: config/PieGraphConfig.interface.ts:40

___

### layout

• **layout**: [*Layout*](config_general_layout_interface.layout.md)

Defined in: config/PieGraphConfig.interface.ts:73

___

### legend

• **legend**: [*Legend*](config_general_legend_interface.legend.md)

Defined in: config/PieGraphConfig.interface.ts:74

___

### noDataWarning

• **noDataWarning**: *string*

**`property`** If data null or undefined. Graph canvas will be cleared and write the noDataWarning test in middle of canvas.

Defined in: config/PieGraphConfig.interface.ts:69

___

### responsive

• **responsive**: [*Responsive*](config_general_responsive_interface.responsive.md)

Defined in: config/PieGraphConfig.interface.ts:71

___

### rotation

• **rotation**: *number*

**`property`** Starting angle to draw arcs from.

Defined in: config/PieGraphConfig.interface.ts:60

___

### title

• **title**: [*Title*](config_general_title_interface.title.md)

Defined in: config/PieGraphConfig.interface.ts:75

___

### tooltip

• **tooltip**: [*Tooltip*](config_general_tooltip_interface.tooltip.md)

Defined in: config/PieGraphConfig.interface.ts:76

___

### weight

• **weight**: *number*

**`property`** The relative thickness of the dataset.
Providing a value for weight will cause the pie or doughnut dataset to be drawn with a thickness relative to the sum of all the dataset weight values.

Defined in: config/PieGraphConfig.interface.ts:27
