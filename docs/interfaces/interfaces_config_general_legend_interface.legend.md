[ngss-graphs - v0.1.2](../README.md) / [Exports](../modules.md) / [interfaces/config/general/Legend.interface](../modules/interfaces_config_general_legend_interface.md) / Legend

# Interface: Legend

[interfaces/config/general/Legend.interface](../modules/interfaces_config_general_legend_interface.md).Legend

## Implemented by

- [*LegendImpl*](../classes/models_inputs_config_general_legendimpl_model.legendimpl.md)

## Table of contents

### Properties

- [align](interfaces_config_general_legend_interface.legend.md#align)
- [display](interfaces_config_general_legend_interface.legend.md#display)
- [fullWidth](interfaces_config_general_legend_interface.legend.md#fullwidth)
- [labels](interfaces_config_general_legend_interface.legend.md#labels)
- [position](interfaces_config_general_legend_interface.legend.md#position)
- [reverse](interfaces_config_general_legend_interface.legend.md#reverse)
- [rtl](interfaces_config_general_legend_interface.legend.md#rtl)

## Properties

### align

• **align**: [*Align*](../enums/models_inputs_enum_align_enum.align.md)

**`property`** Alignment of the legend.

Defined in: interfaces/config/general/Legend.interface.ts:17

___

### display

• **display**: *boolean*

**`property`** the legend shown?.

Defined in: interfaces/config/general/Legend.interface.ts:9

___

### fullWidth

• **fullWidth**: *boolean*

**`property`** Marks that this box should take the full width of the canvas (pushing down other boxes).
This is unlikely to need to be changed in day-to-day use.

Defined in: interfaces/config/general/Legend.interface.ts:22

___

### labels

• **labels**: [*LegendLabel*](interfaces_config_general_shared_legendlabel_interface.legendlabel.md)

**`property`** The legend label configuration is nested below the legend configuration using the labels key.

Defined in: interfaces/config/general/Legend.interface.ts:34

___

### position

• **position**: [*Position*](../enums/models_inputs_enum_position_enum.position.md)

**`property`** Position of the legend.

Defined in: interfaces/config/general/Legend.interface.ts:13

___

### reverse

• **reverse**: *boolean*

**`property`** Legend will show datasets in reverse order.

Defined in: interfaces/config/general/Legend.interface.ts:26

___

### rtl

• **rtl**: *boolean*

**`property`** true for rendering the legends from right to left.

Defined in: interfaces/config/general/Legend.interface.ts:30
