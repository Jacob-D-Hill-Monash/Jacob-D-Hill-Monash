var vg_1 = "js/map.vg.json";
vegaEmbed("#statmap", vg_1).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "js/zones.vg.json";
vegaEmbed("#zonemap", vg_3).then(function(result) {
}).catch(console.error);

var vg_4 = "js/stations_per_country.vg.json";
vegaEmbed("#station", vg_4).then(function(result) {
}).catch(console.error);

var vg_6 = "js/stationTypes.vg.json";
vegaEmbed("#statype", vg_6).then(function(result) {
}).catch(console.error);

var vg_7 = "js/features.vg.json";
vegaEmbed("#feature", vg_7).then(function(result) {
}).catch(console.error);

var vg_8 = "js/protected_area.vg.json";
vegaEmbed("#protm", vg_8).then(function(result) {
}).catch(console.error);

var vg_9 = "js/protected_area_map.vg.json";
vegaEmbed("#prot", vg_9).then(function(result) {
}).catch(console.error);

var vg_0 = "js/boat.vg.json";
vegaEmbed("#boat", vg_0).then(function(result) {
}).catch(console.error);
