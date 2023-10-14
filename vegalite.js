var vg_1 = "cloropleth.vg.json";
vegaEmbed("#cloroplethmap", vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
var vg_2 = "scatterplot.vg.json";
vegaEmbed("#scatterplot", vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
