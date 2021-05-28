[ngss-graphs - v0.1.2](../README.md) / [Exports](../modules.md) / [interfaces/config/PieGraphConfig.interface](../modules/interfaces_config_piegraphconfig_interface.md) / PieGraphConfig

# Interface: PieGraphConfig

[interfaces/config/PieGraphConfig.interface](../modules/interfaces_config_piegraphconfig_interface.md).PieGraphConfig

## Implemented by

- [*PieGraphConfigImpl*](../classes/models_inputs_config_piegraphconfigimpl_model.piegraphconfigimpl.md)

## Table of contents

### Properties

- [animation](interfaces_config_piegraphconfig_interface.piegraphconfig.md#animation)
- [backgroundColor](interfaces_config_piegraphconfig_interface.piegraphconfig.md#backgroundcolor)
- [borderAlign](interfaces_config_piegraphconfig_interface.piegraphconfig.md#borderalign)
- [borderColor](interfaces_config_piegraphconfig_interface.piegraphconfig.md#bordercolor)
- [borderRadius](interfaces_config_piegraphconfig_interface.piegraphconfig.md#borderradius)
- [borderWidth](interfaces_config_piegraphconfig_interface.piegraphconfig.md#borderwidth)
- [circumference](interfaces_config_piegraphconfig_interface.piegraphconfig.md#circumference)
- [cutoutPercentage](interfaces_config_piegraphconfig_interface.piegraphconfig.md#cutoutpercentage)
- [dataLabel](interfaces_config_piegraphconfig_interface.piegraphconfig.md#datalabel)
- [hoverBackgroundColor](interfaces_config_piegraphconfig_interface.piegraphconfig.md#hoverbackgroundcolor)
- [hoverBorderColor](interfaces_config_piegraphconfig_interface.piegraphconfig.md#hoverbordercolor)
- [hoverBorderWidth](interfaces_config_piegraphconfig_interface.piegraphconfig.md#hoverborderwidth)
- [layout](interfaces_config_piegraphconfig_interface.piegraphconfig.md#layout)
- [legend](interfaces_config_piegraphconfig_interface.piegraphconfig.md#legend)
- [noDataWarning](interfaces_config_piegraphconfig_interface.piegraphconfig.md#nodatawarning)
- [responsive](interfaces_config_piegraphconfig_interface.piegraphconfig.md#responsive)
- [rotation](interfaces_config_piegraphconfig_interface.piegraphconfig.md#rotation)
- [title](interfaces_config_piegraphconfig_interface.piegraphconfig.md#title)
- [tooltip](interfaces_config_piegraphconfig_interface.piegraphconfig.md#tooltip)
- [weight](interfaces_config_piegraphconfig_interface.piegraphconfig.md#weight)

## Properties

### animation

• **animation**: [*Animation*](interfaces_config_general_animation_interface.animation.md)

Defined in: interfaces/config/PieGraphConfig.interface.ts:72

___

### backgroundColor

• **backgroundColor**: *string*[]

**`property`** Arc background color. String type of hex, rgb or rgba.

Defined in: interfaces/config/PieGraphConfig.interface.ts:14

___

### borderAlign

• **borderAlign**: [*BorderAlign*](../enums/models_inputs_enum_borderalign_enum.borderalign.md)

**`property`** Descriptions inside the type.

Defined in: interfaces/config/PieGraphConfig.interface.ts:45

___

### borderColor

• **borderColor**: *string*

**`property`** Arc border color. String type of hex, rgb or rgba.

Defined in: interfaces/config/PieGraphConfig.interface.ts:18

___

### borderRadius

• **borderRadius**: *number*

**`property`** Border radius applied to all corners of the arc.

Defined in: interfaces/config/PieGraphConfig.interface.ts:49

___

### borderWidth

• **borderWidth**: *number*

**`property`** Arc border width (in pixels).

Defined in: interfaces/config/PieGraphConfig.interface.ts:22

___

### circumference

• **circumference**: *number*

**`property`** Sweep to allow arcs to cover.

Defined in: interfaces/config/PieGraphConfig.interface.ts:64

___

### cutoutPercentage

• **cutoutPercentage**: *number*

**`property`** The portion of the chart that is cut out of the middle.
If string and ending with '%', percentage of the chart radius.
Number is considered to be pixels.

Defined in: interfaces/config/PieGraphConfig.interface.ts:56

___

### dataLabel

• **dataLabel**: [*DataLabel*](interfaces_config_general_datalabel_interface.datalabel.md)

Defined in: interfaces/config/PieGraphConfig.interface.ts:77

___

### hoverBackgroundColor

• `Optional` **hoverBackgroundColor**: *string*

**`property`** Arc background color when hovered.

Defined in: interfaces/config/PieGraphConfig.interface.ts:32

___

### hoverBorderColor

• **hoverBorderColor**: *string*

**`property`** Arc border color when hovered.

Defined in: interfaces/config/PieGraphConfig.interface.ts:36

___

### hoverBorderWidth

• **hoverBorderWidth**: *number*

**`property`** Arc border width when hovered (in pixels).

Defined in: interfaces/config/PieGraphConfig.interface.ts:40

___

### layout

• **layout**: [*Layout*](interfaces_config_general_layout_interface.layout.md)

Defined in: interfaces/config/PieGraphConfig.interface.ts:73

___

### legend

• **legend**: [*Legend*](interfaces_config_general_legend_interface.legend.md)

Defined in: interfaces/config/PieGraphConfig.interface.ts:74

___

### noDataWarning

• **noDataWarning**: *string*

**`property`** If data null or undefined. Graph canvas will be cleared and write the noDataWarning test in middle of canvas.

Defined in: interfaces/config/PieGraphConfig.interface.ts:69

___

### responsive

• **responsive**: [*Responsive*](interfaces_config_general_responsive_interface.responsive.md)

Defined in: interfaces/config/PieGraphConfig.interface.ts:71

___

### rotation

• **rotation**: *number*

**`property`** Starting angle to draw arcs from.

Defined in: interfaces/config/PieGraphConfig.interface.ts:60

___

### title

• **title**: [*Title*](interfaces_config_general_title_interface.title.md)

Defined in: interfaces/config/PieGraphConfig.interface.ts:75

___

### tooltip

• **tooltip**: [*Tooltip*](interfaces_config_general_tooltip_interface.tooltip.md)

Defined in: interfaces/config/PieGraphConfig.interface.ts:76

___

### weight

• **weight**: *number*

**`property`** The relative thickness of the dataset.
Providing a value for weight will cause the pie or doughnut dataset to be drawn with a thickness relative to the sum of all the dataset weight values.

Defined in: interfaces/config/PieGraphConfig.interface.ts:27
