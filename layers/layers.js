var wms_layers = [];


        var lyr_Esri_0 = new ol.layer.Tile({
            'title': 'Esri',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Varianten_2 = new ol.format.GeoJSON();
var features_Varianten_2 = format_Varianten_2.readFeatures(json_Varianten_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Varianten_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Varianten_2.addFeatures(features_Varianten_2);
var lyr_Varianten_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Varianten_2, 
                style: style_Varianten_2,
                popuplayertitle: "Varianten",
                interactive: true,
    title: 'Varianten<br />\
    <img src="styles/legend/Varianten_2_0.png" /> <br />\
    <img src="styles/legend/Varianten_2_1.png" /> Raingarden B<br />\
    <img src="styles/legend/Varianten_2_2.png" /> Raingarden C<br />\
    <img src="styles/legend/Varianten_2_3.png" /> Raingarden D<br />\
    <img src="styles/legend/Varianten_2_4.png" /> Waterplein A<br />\
    <img src="styles/legend/Varianten_2_5.png" /> Waterplein B<br />\
    <img src="styles/legend/Varianten_2_6.png" /> <br />\
    <img src="styles/legend/Varianten_2_7.png" /> 49.2<br />\
    <img src="styles/legend/Varianten_2_8.png" /> Raingarden A<br />'
        });
var format_Sector3_IBIS_Plantsoen_3 = new ol.format.GeoJSON();
var features_Sector3_IBIS_Plantsoen_3 = format_Sector3_IBIS_Plantsoen_3.readFeatures(json_Sector3_IBIS_Plantsoen_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sector3_IBIS_Plantsoen_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sector3_IBIS_Plantsoen_3.addFeatures(features_Sector3_IBIS_Plantsoen_3);
var lyr_Sector3_IBIS_Plantsoen_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sector3_IBIS_Plantsoen_3, 
                style: style_Sector3_IBIS_Plantsoen_3,
                popuplayertitle: "Sector3_IBIS_Plantsoen",
                interactive: true,
                title: '<img src="styles/legend/Sector3_IBIS_Plantsoen_3.png" /> Sector3_IBIS_Plantsoen'
            });
var format_Sector2_IBIS_Plantsoen_4 = new ol.format.GeoJSON();
var features_Sector2_IBIS_Plantsoen_4 = format_Sector2_IBIS_Plantsoen_4.readFeatures(json_Sector2_IBIS_Plantsoen_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sector2_IBIS_Plantsoen_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sector2_IBIS_Plantsoen_4.addFeatures(features_Sector2_IBIS_Plantsoen_4);
var lyr_Sector2_IBIS_Plantsoen_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sector2_IBIS_Plantsoen_4, 
                style: style_Sector2_IBIS_Plantsoen_4,
                popuplayertitle: "Sector2_IBIS_Plantsoen",
                interactive: true,
                title: '<img src="styles/legend/Sector2_IBIS_Plantsoen_4.png" /> Sector2_IBIS_Plantsoen'
            });
var format_Sector1_IBIS_Plantsoen_5 = new ol.format.GeoJSON();
var features_Sector1_IBIS_Plantsoen_5 = format_Sector1_IBIS_Plantsoen_5.readFeatures(json_Sector1_IBIS_Plantsoen_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sector1_IBIS_Plantsoen_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sector1_IBIS_Plantsoen_5.addFeatures(features_Sector1_IBIS_Plantsoen_5);
var lyr_Sector1_IBIS_Plantsoen_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sector1_IBIS_Plantsoen_5, 
                style: style_Sector1_IBIS_Plantsoen_5,
                popuplayertitle: "Sector1_IBIS_Plantsoen",
                interactive: true,
                title: '<img src="styles/legend/Sector1_IBIS_Plantsoen_5.png" /> Sector1_IBIS_Plantsoen'
            });

lyr_Esri_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_Varianten_2.setVisible(true);lyr_Sector3_IBIS_Plantsoen_3.setVisible(true);lyr_Sector2_IBIS_Plantsoen_4.setVisible(true);lyr_Sector1_IBIS_Plantsoen_5.setVisible(true);
var layersList = [lyr_Esri_0,lyr_OSMStandard_1,lyr_Varianten_2,lyr_Sector3_IBIS_Plantsoen_3,lyr_Sector2_IBIS_Plantsoen_4,lyr_Sector1_IBIS_Plantsoen_5];
lyr_Varianten_2.set('fieldAliases', {'Variant': 'Variant', 'Oppervlak': 'Oppervlak', 'Inhoud': 'Inhoud', });
lyr_Sector3_IBIS_Plantsoen_3.set('fieldAliases', {});
lyr_Sector2_IBIS_Plantsoen_4.set('fieldAliases', {});
lyr_Sector1_IBIS_Plantsoen_5.set('fieldAliases', {});
lyr_Varianten_2.set('fieldImages', {'Variant': 'TextEdit', 'Oppervlak': 'Range', 'Inhoud': 'Range', });
lyr_Sector3_IBIS_Plantsoen_3.set('fieldImages', {});
lyr_Sector2_IBIS_Plantsoen_4.set('fieldImages', {});
lyr_Sector1_IBIS_Plantsoen_5.set('fieldImages', {});
lyr_Varianten_2.set('fieldLabels', {'Variant': 'no label', 'Oppervlak': 'no label', 'Inhoud': 'no label', });
lyr_Sector3_IBIS_Plantsoen_3.set('fieldLabels', {});
lyr_Sector2_IBIS_Plantsoen_4.set('fieldLabels', {});
lyr_Sector1_IBIS_Plantsoen_5.set('fieldLabels', {});
lyr_Sector1_IBIS_Plantsoen_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});