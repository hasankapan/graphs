[ngss-graphs - v0.1.3](../README.md) / [Exports](../modules.md) / [config/general/Responsive.interface](../modules/config_general_responsive_interface.md) / Responsive

# Interface: Responsive

[config/general/Responsive.interface](../modules/config_general_responsive_interface.md).Responsive

## Table of contents

### Properties

- [aspectRatio](config_general_responsive_interface.responsive.md#aspectratio)
- [maintainAspectRatio](config_general_responsive_interface.responsive.md#maintainaspectratio)
- [responsive](config_general_responsive_interface.responsive.md#responsive)
- [responsiveAnimationDuration](config_general_responsive_interface.responsive.md#responsiveanimationduration)

## Properties

### aspectRatio

• **aspectRatio**: *number*

**`property`** Canvas aspect ratio (i.e. width / height, a value of 1 representing a square canvas).
Note that this option is ignored if the height is explicitly defined either as attribute or via the style.

Defined in: config/general/Responsive.interface.ts:18

___

### maintainAspectRatio

• **maintainAspectRatio**: *boolean*

**`property`** Maintain the original canvas aspect ratio (width / height) when resizing.

Defined in: config/general/Responsive.interface.ts:13

___

### responsive

• **responsive**: *boolean*

**`property`** Resizes the chart canvas when its container does.

Defined in: config/general/Responsive.interface.ts:5

___

### responsiveAnimationDuration

• **responsiveAnimationDuration**: *number*

**`property`** Duration in milliseconds it takes to animate to new size after a resize event.

Defined in: config/general/Responsive.interface.ts:9
