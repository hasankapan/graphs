[ngss-graphs - v0.1.2](../README.md) / [Exports](../modules.md) / [interfaces/config/general/Responsive.interface](../modules/interfaces_config_general_responsive_interface.md) / Responsive

# Interface: Responsive

[interfaces/config/general/Responsive.interface](../modules/interfaces_config_general_responsive_interface.md).Responsive

## Implemented by

- [*ResponsiveImpl*](../classes/models_inputs_config_general_responsiveimpl_model.responsiveimpl.md)

## Table of contents

### Properties

- [aspectRatio](interfaces_config_general_responsive_interface.responsive.md#aspectratio)
- [maintainAspectRatio](interfaces_config_general_responsive_interface.responsive.md#maintainaspectratio)
- [responsive](interfaces_config_general_responsive_interface.responsive.md#responsive)
- [responsiveAnimationDuration](interfaces_config_general_responsive_interface.responsive.md#responsiveanimationduration)

## Properties

### aspectRatio

• **aspectRatio**: *number*

**`property`** Canvas aspect ratio (i.e. width / height, a value of 1 representing a square canvas).
Note that this option is ignored if the height is explicitly defined either as attribute or via the style.

Defined in: interfaces/config/general/Responsive.interface.ts:18

___

### maintainAspectRatio

• **maintainAspectRatio**: *boolean*

**`property`** Maintain the original canvas aspect ratio (width / height) when resizing.

Defined in: interfaces/config/general/Responsive.interface.ts:13

___

### responsive

• **responsive**: *boolean*

**`property`** Resizes the chart canvas when its container does.

Defined in: interfaces/config/general/Responsive.interface.ts:5

___

### responsiveAnimationDuration

• **responsiveAnimationDuration**: *number*

**`property`** Duration in milliseconds it takes to animate to new size after a resize event.

Defined in: interfaces/config/general/Responsive.interface.ts:9
