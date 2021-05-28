# ngss-graphs
 
# Get Started
npm -i ngss-graphs

# Configurations
You can read README. in docs folder.

# Sample
in *component.html
<ngss-pie-graph [data]='data' [config]='config' (clickPiece)="getLabel($event)"></ngss-pie-graph>

in *component.ts

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

data.push(euler)
data.push(gauss)
data.push(tesla)

let pieConfigDefaults:PieGraphConfig = this.graphService.getDefaultPieConfig();

/* you can change everything you want in pieConfigDefaults instance */

pieConfigDefaults.title.display = true;
pieConfigDefaults.title.text = "Custom";

config = pieConfigDefaults

getLabel(event:string) {
    console.log('clicked label : ' + event)
}