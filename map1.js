var vg_1 = "js/map.vg.json";
vegaEmbed("#map", vg_1).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
var vg_2 = "js/population.vg.json";
vegaEmbed("#pop", vg_2).then(function(result) {
}).catch(console.error);
var vg_3 = "js/zones.vg.json";
vegaEmbed("#map2", vg_3).then(function(result) {
}).catch(console.error);

