[ngss-graphs - v0.1.2](../README.md) / [Exports](../modules.md) / [components/pie-graph/pie-graph.component](../modules/components_pie_graph_pie_graph_component.md) / PieGraphComponent

# Class: PieGraphComponent

[components/pie-graph/pie-graph.component](../modules/components_pie_graph_pie_graph_component.md).PieGraphComponent

## Implements

- *OnInit*

## Table of contents

### Constructors

- [constructor](components_pie_graph_pie_graph_component.piegraphcomponent.md#constructor)

### Properties

- [chart](components_pie_graph_pie_graph_component.piegraphcomponent.md#chart)
- [clickPiece](components_pie_graph_pie_graph_component.piegraphcomponent.md#clickpiece)
- [config](components_pie_graph_pie_graph_component.piegraphcomponent.md#config)
- [data](components_pie_graph_pie_graph_component.piegraphcomponent.md#data)
- [graphCanvas](components_pie_graph_pie_graph_component.piegraphcomponent.md#graphcanvas)

### Methods

- [clearCanvasFillText](components_pie_graph_pie_graph_component.piegraphcomponent.md#clearcanvasfilltext)
- [createPieChart](components_pie_graph_pie_graph_component.piegraphcomponent.md#createpiechart)
- [ngOnInit](components_pie_graph_pie_graph_component.piegraphcomponent.md#ngoninit)
- [prepare](components_pie_graph_pie_graph_component.piegraphcomponent.md#prepare)
- [prepareData](components_pie_graph_pie_graph_component.piegraphcomponent.md#preparedata)
- [selectedContextEmitter](components_pie_graph_pie_graph_component.piegraphcomponent.md#selectedcontextemitter)

## Constructors

### constructor

\+ **new PieGraphComponent**(): [*PieGraphComponent*](components_pie_graph_pie_graph_component.piegraphcomponent.md)

**Returns:** [*PieGraphComponent*](components_pie_graph_pie_graph_component.piegraphcomponent.md)

Defined in: components/pie-graph/pie-graph.component.ts:26

## Properties

### chart

• **chart**: *any*

Defined in: components/pie-graph/pie-graph.component.ts:17

___

### clickPiece

• **clickPiece**: *EventEmitter*<string\>

Defined in: components/pie-graph/pie-graph.component.ts:24

___

### config

• `Optional` **config**: [*PieGraphConfig*](../interfaces/interfaces_config_piegraphconfig_interface.piegraphconfig.md)

Defined in: components/pie-graph/pie-graph.component.ts:22

___

### data

• `Optional` **data**: [*NameValue*](../interfaces/interfaces_data_namevalue_interface.namevalue.md)[]

Defined in: components/pie-graph/pie-graph.component.ts:20

___

### graphCanvas

• **graphCanvas**: *ElementRef*<any\>

Defined in: components/pie-graph/pie-graph.component.ts:26

## Methods

### clearCanvasFillText

▸ **clearCanvasFillText**(`text`: *string*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | *string* |

**Returns:** *void*

Defined in: components/pie-graph/pie-graph.component.ts:217

___

### createPieChart

▸ **createPieChart**(`data`: [*NameValue*](../interfaces/interfaces_data_namevalue_interface.namevalue.md)[], `config`: [*PieGraphConfig*](../interfaces/interfaces_config_piegraphconfig_interface.piegraphconfig.md)): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [*NameValue*](../interfaces/interfaces_data_namevalue_interface.namevalue.md)[] |
| `config` | [*PieGraphConfig*](../interfaces/interfaces_config_piegraphconfig_interface.piegraphconfig.md) |

**Returns:** *void*

Defined in: components/pie-graph/pie-graph.component.ts:48

___

### ngOnInit

▸ **ngOnInit**(): *void*

**Returns:** *void*

Implementation of: OnInit.ngOnInit

Defined in: components/pie-graph/pie-graph.component.ts:30

___

### prepare

▸ **prepare**(`data`: [*NameValue*](../interfaces/interfaces_data_namevalue_interface.namevalue.md)[], `config`: [*PieGraphConfig*](../interfaces/interfaces_config_piegraphconfig_interface.piegraphconfig.md)): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [*NameValue*](../interfaces/interfaces_data_namevalue_interface.namevalue.md)[] |
| `config` | [*PieGraphConfig*](../interfaces/interfaces_config_piegraphconfig_interface.piegraphconfig.md) |

**Returns:** *void*

Defined in: components/pie-graph/pie-graph.component.ts:38

___

### prepareData

▸ **prepareData**(`data`: [*NameValue*](../interfaces/interfaces_data_namevalue_interface.namevalue.md)[]): *Promise*<[*StatusMessage*](models_calls_statusmessage_model.statusmessage.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [*NameValue*](../interfaces/interfaces_data_namevalue_interface.namevalue.md)[] |

**Returns:** *Promise*<[*StatusMessage*](models_calls_statusmessage_model.statusmessage.md)\>

Defined in: components/pie-graph/pie-graph.component.ts:198

___

### selectedContextEmitter

▸ **selectedContextEmitter**(`value`: *string*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | *string* |

**Returns:** *void*

Defined in: components/pie-graph/pie-graph.component.ts:34
