<template>
  <!--<quasar-layout>-->
  <div id='map'></div>
  <!--</quasar-layout>-->
</template>

<script>
import mapboxgl from 'mapbox-gl'

export default {
  data () {
    return {}
  },
  ready () {
    this.createMap()
  },
  methods: {
    createMap: function () {
      mapboxgl.accessToken = 'pk.eyJ1IjoiYmVuamFtaW4td3lzcyIsImEiOiJVcm5FdEw4In0.S8HRIEq8NqdtFVz2-BwQog'
      var simple = {
        'version': 8,
        'sources': {
          'osm': {
            'type': 'vector',
            'tiles': ['https://vector.mapzen.com/osm/all/{z}/{x}/{y}.mvt?api_key=vector-tiles-LM25tq4']
          }
        },
        'layers': [{
          'id': 'background',
          'type': 'background',
          'paint': {
            'background-color': '#bbccd2'
          }
        },
          {
            'id': 'majorroad',
            'source': 'osm',
            'source-layer': 'roads',
            'type': 'line'
          },
          {
            'id': 'buildings',
            'type': 'fill',
            'source': 'osm',
            'source-layer': 'buildings'
          }]
      }

      // init the map
      this.map = new mapboxgl.Map({
        container: 'map',
        style: simple,
        minzoom: 1.3,
        bearingSnap: 15,
        hash: true,   // shows coordinates and zoom in URL widget
        center: [-74.0073, 40.7124], // Manhattan
        zoom: 16,
        attributionControl: true,
        interactive: true,
        scrollZoom: true,
        dragRotate: true,
        dragPan: true,
        doubleClickZoom: true,
        pitch: 60
      })

      this.map.addControl(new mapboxgl.Navigation())
      this.map.addControl(new mapboxgl.Geolocate({position: 'top-left'}))
      this.map.addControl(new mapboxgl.Attribution({position: 'bottom-right'}))
      this.map.addControl(new mapboxgl.Scale({
        position: 'bottom-left',
        maxWidth: 80,
        unit: 'imperial'
      }))
    }
  }
}
</script>

<style>

#map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}

</style>

