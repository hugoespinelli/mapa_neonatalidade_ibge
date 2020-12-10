import 'ol/ol.css';
import { Map, View } from 'ol';
import { Image as ImageLayer, Tile as TileLayer } from 'ol/layer';
import OSM from 'ol/source/OSM';
import ImageWMS from 'ol/source/ImageWMS';
import { fromLonLat } from 'ol/proj';

import './styles/index.scss';

const layers = [
    new TileLayer({
        source: new OSM(),
    }),
    // new ImageLayer({
    //     source: new ImageWMS({
    //         url: 'https://geoservicos.ibge.gov.br/geoserver/ODS/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=ODS_3_22_2010',
    //         params: {'LAYERS': 'ODS_3_22_2010', 'TILED': true},
    //         serverType: 'geoserver',
    //         ratio: 1,
    //     }),
    // })
];

const map = new Map({
    target: 'map',
    layers: layers,
    view: new View({
        center: fromLonLat([-43.2096, -22.9035]),
        zoom: 3,
    }),
});

const btnIds = [1, 2, 3, 4];

const btns = btnIds.map(id => document.getElementById(`btn-${id}`));

btns.forEach(btn => {
    btn.onclick = e => loadImageLayer(e);
});

const neonatalityDeaths = {
    2010: { layerName: 'ODS_3_22_2010', url: 'https://geoservicos.ibge.gov.br/geoserver/ODS/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=ODS_3_22_2010'},
    2011: { layerName: 'ODS_3_22_2011', url: 'https://geoservicos.ibge.gov.br/geoserver/ODS/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=ODS_3_22_2011'},
    2012: { layerName: 'ODS_3_22_2012', url: 'https://geoservicos.ibge.gov.br/geoserver/ODS/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=ODS_3_22_2012'},
    2013: { layerName: 'ODS_3_22_2013', url: 'https://geoservicos.ibge.gov.br/geoserver/ODS/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=ODS_3_22_2013'},
};

let layerActive = null;

function createImageLayer(layerName, url) {
    return new ImageLayer({
        source: new ImageWMS({
            url,
            params: {'LAYERS': layerName, 'TILED': true},
            serverType: 'geoserver',
            ratio: 1,
        })
    })
}

function loadImageLayer(e) {
    const year = e.target.value;
    const { layerName, url } = neonatalityDeaths[year];
    const imageLayer = createImageLayer(layerName, url);
    if (layerActive) {
        map.removeLayer(layerActive);
    }
    map.addLayer(imageLayer);
    layerActive = imageLayer;
}

function test(e) {
    console.log(e);
    console.log("chamado!");
}

