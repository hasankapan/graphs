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

/*for chart-js & charjs-plugin*/
```bash
npm install 
```
```bash
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

export class AppComponent implements OnInit{

  data:NameValue[] = [];
  config:PieGraphConfig;

  constructor(private graphService:GraphService) { }

  ngOnInit(): void {
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

    pieConfigDefaults.tooltip.enabled = false;
    pieConfigDefaults.hoverBackgroundColor = undefined;
    pieConfigDefaults.hoverBorderColor = 'white';
    pieConfigDefaults.hoverBorderWidth = 2;
    pieConfigDefaults.cutoutPercentage = 0;
    pieConfigDefaults.borderWidth = .5;

    pieConfigDefaults.tooltip.caretSize = 2;
    pieConfigDefaults.tooltip.caretPadding = 0;

    pieConfigDefaults.dataLabel.display = true;
    pieConfigDefaults.dataLabel.anchor = Anchor.CENTER
    pieConfigDefaults.dataLabel.backgroundColor = 'white';
    pieConfigDefaults.dataLabel.padding = 0;
    pieConfigDefaults.dataLabel.borderRadius = 10;
    pieConfigDefaults.dataLabel.borderWidth = .3;
    pieConfigDefaults.dataLabel.borderColor = 'white' 

    this.config = pieConfigDefaults;

  }

  getLabel(e:string){
    console.log(e);
  }
}
```

## License
[MIT](https://choosealicense.com/licenses/mit/)