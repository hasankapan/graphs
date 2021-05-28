# ngss-graphs

ngss-graphs is a angular library for easily create charts.
 
## Installation
#### package.json
```json
"dependencies": {
    ...
    "chart.js": "^2.9.4",
    "chartjs-plugin-datalabels": "^1.0.0",
  },
```

```bash
npm install &
npm install ngss-graphs
```
## Configurations
You can read README file for more chart configuration information [docs](https://github.com/hasankapan/graphs/blob/main/docs/modules.md)

## Sample
#### in *module
```ts
import { GraphsModule } from 'ngss-graphs';


imports: [
    ...
    GraphsModule
  ],
```

#### in *component.html
```html
<ngss-pie-graph [data]='data' [config]='config' (clickPiece)="getLabel($event)"></ngss-pie-graph>
```
#### in *component.ts
```ts
import { GraphService, NameValue, PieGraphConfig } from 'ngss-graphs';



/*properties*/
data:NameValue[];
config:PieGraphConfig;


let euler:NameValue = {
    name:"euler",
    value: 150
}
let gauss:NameValue = {
    name:"gauss",
    value: 254
}
let tesla:NameValue = {
    name:"tesla",
    value: 400
}

this.data.push(euler)
this.data.push(gauss)
this.data.push(tesla)

let pieConfigDefaults:PieGraphConfig = this.graphService.getDefaultPieConfig();

/* you can change everything you want in pieConfigDefaults instance */

pieConfigDefaults.title.display = true;
pieConfigDefaults.title.text = "Custom";

this.config = pieConfigDefaults

getLabel(event:string) {
    console.log('clicked label : ' + event)
}
```

## License
[MIT](https://choosealicense.com/licenses/mit/)